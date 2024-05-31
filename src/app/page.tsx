/* eslint-disable max-len */
import Landing from '@/src/components/Landing'
import Main from '@/src/components/Landing/Main'
import "@/src/assets/styles/landing.css"
export const metadata = {
  title: 'SolExchange',
  description:
    '',
}
const HomePage = () => {
  return (
    <main>
      <div className="pt-10 mx-auto">
        <Main />
        <Landing />
      </div>
    </main>
  )
}

export default HomePage
