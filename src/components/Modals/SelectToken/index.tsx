'use client'
import { Modal } from '@/src/components/UI'
import Search from '@/src/components/Common/Search'
import Image from 'next/image'

import { IToken } from '@/src/library/types'

import { useEffect, useState } from 'react'
import { getTokensBalance } from '@/src/library/hooks/web3/useTokenBalance'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { formatCurrency } from '@/src/library/utils/numbers'
import { fetchTokens } from '@/src/library/common/getAvailableTokens'

interface SelectTokenProps {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
  setToken: (token: IToken) => void
  commonList?: IToken[]
  tokenList?: IToken[]
  tokenBalances?: { [key: `0x${string}`]: string }
}

const SelectToken = ({ setOpenModal, openModal, setToken, commonList, tokenBalances, tokenList }: SelectTokenProps) => {
  const [_tokenList, setTokenList] = useState<IToken[]>(tokenList ? tokenList : [])
  const [_commonList, setCommonList] = useState<IToken[]>(commonList ? commonList : [])
  const [searchValue, setSearchValue] = useState<string>('')
  const [_tokenBalances, setTokenBalances] = useState<{ [key: `0x${string}`]: string }>(
    tokenBalances ? tokenBalances : {}
  )
  const account = useAccount()

  const handlerClose = () => setOpenModal(false)

  const handlerSelectToken = (token: IToken) => {
    //console.log(token, 'inn')
    setToken(token)
    // settoken0(token0Data?.address)
    // settoken1(token1Data?.address)
    setOpenModal(false)
  }

  useEffect(() => {
    const getList = async () => {
      try {
        const responseData = await fetchTokens()

        const parsedData = responseData.map((item: any) => {
          console.log('item >> ', item)
          return {
            id: 0,
            name: item.basetoken.name,
            symbol: item.basetoken.symbol,
            address: item.basetoken.address,
            decimals: item.decimals,
            img: item.logourl,
            isCommon: item.common,
            price: parseFloat(item.priceUSD),
          }
        })

        console.log('parsedData >> ', parsedData)

        const commonList = parsedData.filter((item: any) => item.isCommon)

        const balances = await getTokensBalance(
          parsedData.map((item: any) => {
            return item.address as Address
          }),
          account.address as Address
        )
        setTokenBalances(balances)

        setCommonList(commonList)
        parsedData.filter((token: any) => token?.symbol.toLowerCase().includes(searchValue.toLowerCase()))
        setTokenList(parsedData)
      } catch (error) {}
    }

    getList()
  }, [account.address])


  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal}>
      <div className="common-modal">
        <span className="absolute top-0 right-0 text-2xl cursor-pointer icon-x text-shark-100" onClick={handlerClose} />
        <div className="relative z-10 w-full h-full">
          <h1 className="text-md font-medium text-white">Select a Token</h1>
          {/* <p className="mb-2 text-sm text-shark-100">
            Select a token from our default list or search for a token by symbol or address.
          </p> */}

          <div className="mb-2">
            <Search setSearchValue={setSearchValue} searchValue={searchValue} />
          </div>

          {/* <div className="mb-1 text-sm text-white">Common Tokens</div> */}
          <div className="flex flex-row items-center gap-1 mb-1">
            {_commonList ? (
              _commonList.map((token, index) => (
                <div
                  key={index}
                  onClick={() => handlerSelectToken(token)}
                  className="flex items-center w-full gap-2 px-2 py-2 rounded-lg cursor-pointer bg-shark-400 bg-opacity-40 xl:py-1 xl:w-auto"
                >
                  <Image src={`/static/images/tokens/${token.symbol}.svg`} alt="token" width={30} height={30} className="w-5 h-5" />
                  <p className="text-xs text-white">{token.symbol}</p>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
            {_tokenList && searchValue === '' ? (
              _tokenList.map((token, index) => (
                <div
                  key={index}
                  onClick={() => handlerSelectToken(token)}
                  className="flex items-center justify-between py-1 px-2 rounded-lg cursor-pointer bg-shark-400 bg-opacity-40"
                >
                  <div className="flex items-center gap-2">
                    <Image src={`/static/images/tokens/${token.symbol}.svg`} alt="token" width={30} height={30} className="w-7 h-7" />
                    <div className="relative">
                      <p className="text-xs text-white">{token.symbol}</p>
                      <p className="text-xs text-shark-100">{token.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-transparent icon-wallet bg-gradient-to-r from-outrageous-orange-500 to-festival-500 bg-clip-text"></span>
                      {/* <p className="text-xs text-white">Balance: {token.balance}</p> */}
                      {/* todo fetch balance */}
                      <p className="text-xs text-white">
                        Balance:{' '}
                        {_tokenBalances
                          ? `${(parseInt(_tokenBalances[token.address as Address]) / 10 ** Number(token.decimals)).toFixed(2).replace('NaN', '0')}`
                          : `0`}
                      </p>
                    </div>
                    <div className="text-white bg-button-primary text-[10px] leading-none py-1 rounded-md text-center px-2">
                      {_tokenBalances
                        ? `$${formatCurrency(
                            (
                              (parseInt(_tokenBalances[(token.address as Address).toLowerCase() as `0x${string}`]) /
                                10 ** token.decimals) *
                              token.price
                            )
                              .toFixed(2)
                              .replace('NaN', '0')
                          )}`
                        : `0`}
                    </div>
                  </div>
                </div>
              ))
            ) : searchValue !== '' ? (
              _tokenList.filter(
                (token) =>
                  token.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                  token?.address?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
              ).length > 0 ? (
                _tokenList
                  .filter(
                    (token) =>
                      token.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                      token?.address?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                  )
                  .map((token, index) => (
                    <div
                      key={index}
                      onClick={() => handlerSelectToken(token)}
                      className="flex items-center justify-between py-1 px-2 rounded-lg cursor-pointer bg-shark-400 bg-opacity-40"
                    >
                      <div className="flex items-center gap-2">
                        <Image src={`/static/images/tokens/${token.symbol}.svg`} alt="token" width={30} height={30} className="w-7 h-7" />
                        <div className="relative">
                          <p className="text-xs text-white">{token.symbol}</p>
                          <p className="text-xs text-shark-100">{token.name}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-transparent icon-wallet bg-gradient-to-r from-outrageous-orange-500 to-festival-500 bg-clip-text"></span>
                          {/* <p className="text-xs text-white">Balance: {token.balance}</p> */}
                          {/* todo fetch balance */}
                          <p className="text-xs text-white">
                            Balance:{' '}
                            {_tokenBalances
                              ? `${(parseInt(_tokenBalances[token.address as Address]) / 10 ** Number(token.decimals)).toFixed(2).replace('NaN', '0')}`
                              : `0`}
                          </p>
                        </div>
                        <div className="text-white bg-button-primary text-[10px] leading-none py-1 rounded-md text-center px-2">
                          {_tokenBalances
                            ? `$${formatCurrency(
                                (
                                  (parseInt(_tokenBalances[token.address as Address]) / 10 ** token.decimals) *
                                  token.price
                                )
                                  .toFixed(2)
                                  .replace('NaN', '0')
                              )}`
                            : `0`}
                        </div>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="text-center text-shark-100 p-4">NO TOKEN FOUND</div>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-center">
            {/* <Button className="mt-2 mb-2 lg:w-full sm:w-full w-72" variant="tertiary">
              Confirm SelectToken
            </Button> */}
          </div>
          {/* <div className="flex items-center justify-center gap-2 cursor-pointer text-shark-100 hover:text-outrageous-orange-500">
            <span className="icon-discord"></span>
            <p className="text-sm">Need help?</p>
          </div> */}
        </div>
      </div>
    </Modal>
  )
}

export default SelectToken
