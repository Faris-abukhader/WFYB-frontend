import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import StatisticCard from './StatisticCard';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
import { getTranslatedText as t } from '../../localization/config';
import { useSession } from 'next-auth/react';
export default function StaticSection({language}) {
    const session = useSession()
    const accoutType = session.data?.user?.accoutType
    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            display:false
            },
            title: {
            display: false,
            },
        },
        };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [13,54,86,23,65,32,68],
            borderColor: 'rgb(34, 197, 94)',
            backgroundColor: 'rgba(34, 197, 94, 0.5)',
          }
        ],
      };

      
  return (
    <div className='p-5 bg-white shadow-lg rounded-md'>
        <div className='flex-row sm:flex items-center gap-3 space-y-3 sm:space-y-0 pb-3 font-almarai'>
            {accoutType =='f'?
            <>
            <StatisticCard amount={0} title={t('fundRaised',language)} isMoney={true}/>
            <StatisticCard amount={0} title={t('totalBacked',language)}/>
            <StatisticCard amount={0} title={t('pledgesReceived',language)}/>
            </>
             :
             <>
            <StatisticCard amount={0} title={t('totalBacked',language)} isMoney={true}/>
            <StatisticCard amount={0} title={t('projectsBacked',language)}/>
             </> 
             }
        </div>
        <Line options={options} data={data} />
    </div>
    
  )
}