import Link from 'next/link'
import {getPagesList} from '../../../utils/utils'
import { useState } from 'react'
import AddNewProjectModel from './AddNewProjectModel'
export default function Header({currentPage}) {
    const accountType = 's'
    const [showModel,setShowModel] = useState(false)
    const toggle=()=>{
        setShowModel(!showModel)
    }
    return (
        <div>
            <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundSize: '100% 85%' }} className={`relative w-full h-80 bg-[url('/images/dashboardHeader.jpeg')] object-contain font-bold`}>
                <div className='hidden sm:block absolute bottom-10 right-4 bg-white p-3 rounded-md'>Dashboard / {currentPage}</div>
            </div>
            <div style={{ maxWidth: '750px' }} className='w-full flex items-center justify-center space-x-6 p-4 shadow-md rounded-md border-t mx-auto'>
                <ul className='w-full flex space-x-6 mx-auto font-bold font-almarai'>
                    {accountType && getPagesList(accountType).map((item,index)=>{
                        return (<Link href={`/${item.url}`} key={index}> <li  className='hover:cursor-pointer hover:border-b-2 border-green-500 transition-all duration-300'>{item.title}</li></Link>                        )
                    })}
                </ul>
                {accountType=='s' &&<button onClick={toggle} className='bg-green-500  py-3 w-[120px] rounded-md hover:bg-green-600 hover:ring ring-green-700 text-white'>add project</button>}
            </div>
            <AddNewProjectModel show={showModel} toggle={toggle}/>
        </div>
    )
}
