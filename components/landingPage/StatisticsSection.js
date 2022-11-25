import React from 'react'
import StatisticCard from './StatisticCard'
export default function StatisticsSection() {
  return (
    <div className='sm:flex justify-between space-x-2 space-y-8 sm:space-y-0 py-20 bg-green-300 bg-opacity-10 mt-8'>
      <StatisticCard icon={`completedProject.svg`} num={3598} title={`We've Project Complete`} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard icon={`globalPartner.svg`} num={9634} title={`Trusted Global Partners`} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard icon={`globalAward.svg`} num={8566} title={`Global Awards Winning`} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard icon={`volunteer.svg`} num={4856} title={`24/7 Active Volunteer`} description={`Quis autem veleucmure reprehenderit quein.`}/>
 </div>
  )
}
