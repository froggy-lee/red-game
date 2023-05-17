import React from 'react'
import GetStartedSection from './GetStartedSection'
import IntroductionSection from './IntroductionSection'
import RoadmapSection from './RoadmapSection'
import TokenEconomicSection from './TokenEconomicSection'
import TransparentGameDataSection from './TransparentGameDataSection'
import TransparentInvesmentSection from './TransparentInvestmentSection'

function LandingModule() {
  return (
    <>
      <GetStartedSection />
      <IntroductionSection />
      <TransparentInvesmentSection />
      <TransparentGameDataSection />
      <TokenEconomicSection />
      <RoadmapSection />
    </>
  )
}

export default LandingModule
