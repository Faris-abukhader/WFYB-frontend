import React from 'react'

export default function BackerList({data}) {
    const donation = data.map((item) => {
        return(
            <div key={item.id}>
                <div className='grid grid-cols-3 gap-2 md:gap-0 text-base text-slate-500'>
                    <p>{item.name}</p>
                    <p>${item.amount}</p>
                    <p>{item.date}</p> 
                </div>
                <hr />
            </div>
        )
    })

    return (
        <div className='grid grid-cols-1 gap-5'>
            <div>
                <div className='grid grid-cols-3 gap-2 md:gap-0 text-xl font-bold'>
                    <h2>Name</h2>
                    <h2>Donate Amount</h2>
                    <h2>Date</h2>
                </div>
                <hr />
            </div>
            {donation}
        </div>
    )
}