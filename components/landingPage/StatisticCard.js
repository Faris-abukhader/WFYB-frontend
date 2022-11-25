import Image from 'next/image'
export default function StatisticCard({icon,num,title,description}) {
  return (
    <div className='font-bold text-center px-2 space-y-2'>
        <div className='w-full flex justify-center'>
        <Image src={`/icons/${icon}`} width={60} height={60} alt='section_avatar'/>
        </div>
      <h2>{num}+</h2>
      <h4>{title}</h4>
      <div className='w-full flex justify-center'>
      <p className='text-sm font-normal px-1 border-l-2 border-green-500 w-2/3'>{description}</p>
      </div>
    </div>
  )
}
