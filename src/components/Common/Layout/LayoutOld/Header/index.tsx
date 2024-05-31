// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// import Menu from './Menu'
// import AccountHandler from './AccountHandler'
// import WalletSelection from '@/src/components/Modals/WalletSelection'
// import { useWindowSize } from 'usehooks-ts'
// import { usePathname } from 'next/navigation'
// const Header = () => {
//   const pathname = usePathname()
//   const { width } = useWindowSize()

//   // Todas las clases que tienen como condicion "pathname === '/' son tomadas en cuenta para el landing page de forma que no modifiquen estilos importantes en el resto de la aplicación"
//   return (
//     <header className={`hidden mx-auto ${pathname === '/' ? 'lg:block' : 'lg:block'}  container`}>
//       <div
//         className={`${pathname === '/' ? 'relative' : 'header-box h-[102px] px-5 pb-3'}  flex justify-center items-center  rounded-l`}
//       >
//         <div
//           className={`flex items-center   min-w-[50px]  z-10 h-[95px] w-full  ${pathname === '/' && 'absolute w-full left-0'}`}
//         >
//           <Link href="/">
//             <Image
//               src="/static/images/solexchange/logo.svg"
//               className="w-[150px] h-10"
//               alt="logo"
//               width={150}
//               height={40}
//               priority
//             />
//             <p className='text-white'>SOLEXCHANGE</p>
//           </Link>
//         </div>

//         <div
//           className={`${pathname === '/' ? 'flex  justify-center  items-center' : 'w-full flex justify-center relative z-10 max-xl:mr-auto max-2xl:mr-[40px]'} `}
//         >
//           <Menu />
//         </div>

//         <div
//           className={`flex  z-10 items-center gap-3.5  ${width < 860 ? 'px-1' : 'px-5'}
//           h-[95px]
//           ${pathname === '/' ? 'absolute right-0 w-full justify-end' : 'w-full justify-center'}`}
//         >
//           <AccountHandler isMenuMobile={false} />
//         </div>
//       </div>
//       <WalletSelection />
//     </header>
//   )
// }

// export default Header