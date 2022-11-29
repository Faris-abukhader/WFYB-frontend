import React from 'react'

export default function ProjectUpdatesNav({onClickOption}) {
    const [selected, setSelected] = React.useState('story')

    return (
        <div className='shadow-[0_5px_20px_0px_rgba(0,0,0,0.1)] mb-8'>
            <ul className=' flex justify-center items-center shadow-[0_30px_0px_-20px_rgba(0,0,0,0.05)]
                            w-full font-almarai'>
                <li onClick={(event) => {
                        setSelected('story')
                        return onClickOption(event)
                    }}
                    id="story" 
                    className= {`font-bold text-xl p-5 px-10 border-green-500 ${selected === 'story' && `border-b-4 text-green-500`} 
                                focus:text-green-500 hover:cursor-pointer hover:text-green-500`}>
                    Story
                </li>
                
                <li onClick={(event) => {
                        setSelected('backerList')
                        return onClickOption(event)
                    }} 
                    id="backerList"
                    className= {`font-bold text-xl p-5 px-10 border-green-500 ${selected === 'backerList' && `border-b-4 text-green-500`} 
                                focus:text-green-500 hover:cursor-pointer hover:text-green-500`}
                >
                    Backer List
                </li>
            </ul>
        </div>
    )
}
