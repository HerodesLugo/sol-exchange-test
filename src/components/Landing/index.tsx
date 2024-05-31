'use client'

import HowItWorks from './HowItWorks'
import Partners from './Partners'
import Security from './Security'

const Landing = () => {
  return (
    <main className="overflow-hidden">
      <HowItWorks />
      <Partners />
      <Security />
      {/* <Supercharged/>
      <Overview />
      <Insights/>
      <Community/>
      <BuildInfo/>
      */}
    </main>
  )
}

export default Landing
