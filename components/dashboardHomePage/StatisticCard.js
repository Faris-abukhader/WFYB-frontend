import React from 'react'

export default function StatisticCard({amount=0,isMoney=false,title}) {
  return (
    <div className={`${isMoney ?'bg-green-500 text-gray-50':' bg-slate-100'} p-3  rounded-md w-full font-bold space-y-2`}>
        <h1 className='text-xl'>{isMoney && <span>$</span>} {amount}</h1>
        <p className='text-xs'>{title}</p>

    </div>
  )
}
