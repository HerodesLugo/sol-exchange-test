import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { VoteTableElement, voteState } from './types'
import { Address } from 'viem'
import { getAvailableTokens } from '@/src/library/web3/common/TokenManagement'
import { Token } from '@/src/library/structures/common/TokenData'
import { getAllClPairRewards, getAllPairRewards } from '@/src/library/web3/RewardAPIV3Management'
import { NULL_ADDRESS } from '@/src/library/Constants'
import { getAllPairsForUser } from '@/src/library/web3/apis/PairAPIV3'
import { BigDecimal } from '@/src/library/web3/common/BigDecimal'
import { useAppSelector } from '..'
import { lockState } from '../lock/types'

const initialState: voteState = {
  appState: '',
  votes: [],
  percentage: 0,
  voteTableElement: [],
}

const vote = createSlice({
  name: 'voteInfo',
  initialState,
  reducers: {
    setpercentage: (state, action: PayloadAction<number>) => {
      state.percentage = action.payload
    },
    setvotes: (state, action: PayloadAction<number[]>) => {
      state.votes = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGaugesAsync.pending, (state) => {
        state.appState = 'loading'
      })
      .addCase(fetchGaugesAsync.fulfilled, (state, action: PayloadAction<VoteTableElement[] | undefined>) => {
        state.appState = 'loading'
        state.voteTableElement = action.payload || []
        state.appState = 'success'
      })
      .addCase(fetchGaugesAsync.rejected, (state) => {
        state.appState = 'error'
      })
  },
})

export const fetchGaugesAsync = createAsyncThunk('voteInfo/fetchGaugesAsync', async (address: Address) => {
  const availableTokenData = await getAvailableTokens()
  if (!availableTokenData) {
    return
  }
  const tokensObject: Record<string, Token> = {}
  availableTokenData.tokens.forEach((token) => {
    tokensObject[token.id] = {
      id: token.id,
      symbol: token.symbol,
      name: token.name,
      decimals: token.decimals,
    }
  })
  const r = await getAllPairRewards(address, tokensObject)
  const rCL = await getAllClPairRewards(address, tokensObject)

  const validRewards = [
    ...r.filter((r) => {
      return r._pool !== NULL_ADDRESS && r._gauge !== NULL_ADDRESS
    }),
    ...rCL.filter((r) => {
      return r._pool !== NULL_ADDRESS && r._gauge !== NULL_ADDRESS
    }),
  ]

  let totalVotingPower = 0n
  let userTotalVotingPower = 0n
  validRewards.forEach((r) => {
    totalVotingPower += r.totalVotesOnGauge
    userTotalVotingPower += r.totalVotesOnGaugeByUser
  })

  const chrTokenPrice = 1

  const availablePairsV3 = await getAllPairsForUser(address)

  const voteElements: VoteTableElement[] = []

  validRewards.forEach((reward) => {
    const pair = availablePairsV3.find((pair) => pair.gauge.toLowerCase() === reward._gauge.toLowerCase())!

    if (!pair) {
      return
    }

    const usdValueExternal = reward.externalBribeReward.tokens
      .map((token, index) => {
        const tokenElement = availableTokenData!.tokens.find((t) => t.id.toLowerCase() === token.toLowerCase())
        if (!tokenElement) return new BigDecimal(0n, 18)
        return new BigDecimal(
          reward.externalBribeReward.amounts[index],
          Number(reward.externalBribeReward.decimals[index])
        ).mulNumber(1)
      })
      .reduce((a, b) => b.add(a), new BigDecimal(0n, 18))

    const usdValueInternal = reward.internalBribeReward.tokens
      .map((token, index) => {
        const tokenElement = availableTokenData!.tokens.find((t) => t.id.toLowerCase() === token.toLowerCase())
        if (!tokenElement) {
          return new BigDecimal(0n, 18)
        }
        return new BigDecimal(
          reward.internalBribeReward.amounts[index],
          Number(reward.internalBribeReward.decimals[index])
        ).mulNumber(1)
      })
      .reduce((a, b) => b.add(a), new BigDecimal(0n, 18))

    //     const lock = useAppSelector((state) => state.lock as lockState)

    //     const currentVotingAmount = lock?.veNFTInfo
    //       ? new BigDecimal(lock?.veNFTInfo.voting_amount, 18)
    //       : new BigDecimal(0n, 18)
    //     const parsedVoteWeight = new BigDecimal(reward.totalVotesOnGauge, 18)

    const pairToken0Details = tokensObject[pair.token0.toLowerCase()]
    const pairToken1Details = tokensObject[pair.token1.toLowerCase()]

    const token0Symbol = pairToken0Details ? pairToken0Details.symbol : pair.token0_symbol
    const token1Symbol = pairToken1Details ? pairToken1Details.symbol : pair.token1_symbol

    //     let voteDollarValue =
    //       ((usdValueExternal.toRoundedFloat() + usdValueInternal.toRoundedFloat()) /
    //         (parsedVoteWeight.toRoundedFloat() + currentVotingAmount.toRoundedFloat())) *
    //       currentVotingAmount.toRoundedFloat()

    // if (isNaN(voteDollarValue)) {
    //   voteDollarValue = 0;
    // }

    const getPoolAPR = () => {
      // TODO: FUSDC APR BUG
      // if (token0Symbol === 'FUSDC') {
      //   debugger;
      //   console.log('Calculating APR for FUSDC');
      //   console.log('Total votes on gauge: ', reward.totalVotesOnGauge);
      // }
      if (reward.totalVotesOnGauge > 0n) {
        const totalVotesOnGaugeBigDecimal = new BigDecimal(reward.totalVotesOnGauge, 18)
          .mulNumber(chrTokenPrice)
          .toRoundedFloat()

        // if (token0Symbol === 'FUSDC') {
        //   console.log('Rewards');
        //   console.log(usdValueExternal);
        //   console.log(usdValueInternal);
        //   console.log(usdValueExternal.add(usdValueInternal).mulNumber(100 * 52.1));
        //   console.log(totalVotesOnGaugeBigDecimal);
        //   console.log("paco");
        //   console.log(new BigDecimal(10n, 6).div(new BigDecimal(1000n, 18)));
        // }

        return (usdValueExternal.add(usdValueInternal).toRoundedFloat() * 100 * 52.1) / totalVotesOnGaugeBigDecimal
      }
      return usdValueExternal.add(usdValueInternal).toRoundedFloat()
    }

    voteElements.push({
      // voteDollarValue,
      pair: pair,
      voteWeight: reward.totalVotesOnGauge,
      voteWeightPercentage:
        totalVotingPower > 0n
          ? BigDecimal.div2BigInt(reward.totalVotesOnGauge, totalVotingPower, 18)
          : new BigDecimal(0n, 18),
      rewardPair: reward,
      poolAPR: getPoolAPR(),
      dollarRewardsValue: usdValueExternal.add(usdValueInternal),
      yourVoteWeight: reward.totalVotesOnGaugeByUser,
      yourVoteWeightPercentage:
        userTotalVotingPower > 0n
          ? BigDecimal.div2BigInt(reward.totalVotesOnGaugeByUser, userTotalVotingPower, 18)
          : new BigDecimal(0n, 18),
      token0Symbol,
      token1Symbol,
    } as VoteTableElement)
  })
  voteElements.sort((a, b) => {
    if (a.voteWeight! > b.voteWeight!) {
      return -1
    }
    if (a.voteWeight! < b.voteWeight!) {
      return 1
    }
    return 0
  })

  return voteElements
})

export const { setvotes, setpercentage } = vote.actions

export default vote.reducer