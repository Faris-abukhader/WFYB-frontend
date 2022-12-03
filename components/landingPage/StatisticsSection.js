import StatisticCard from './StatisticCard'
import { getTranslatedText as t } from '../../localization/config'
export default function StatisticsSection({language}) {
  return (
    <div className='sm:flex justify-between gap-2 space-y-8 sm:space-y-0 py-20 bg-green-300 bg-opacity-10 mt-8'>
      <StatisticCard language={language} icon={`completedProject.svg`} num={3598} title={t('weHaveProjectComplete',language)} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard language={language} icon={`globalPartner.svg`} num={9634} title={t(`trustedGlobalPartners`,language)} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard language={language} icon={`globalAward.svg`} num={8566} title={t(`globalAwardsWinning`,language)} description={`Quis autem veleucmure reprehenderit quein.`}/>
      <StatisticCard language={language} icon={`volunteer.svg`} num={4856} title={t(`24/7ActiveVolunteer`,language)} description={`Quis autem veleucmure reprehenderit quein.`}/>
 </div>
  )
}
