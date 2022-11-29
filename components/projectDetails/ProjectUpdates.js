import React from 'react'
import Story from './Story'
import BackerList from './BackerList'
import ProjectUpdatesNav from './ProjectUpdatesNav'

export default function ProjectUpdates() {
    const [option, setOption] = React.useState('story')

    function onClickOption(event){
        setOption(event.target.id)
    }

    const dummyData = [
        {id: 1, name: 'Anonymous', amount: '54,080', date: '21 Dec, 2021 8:00 am'},
        {id: 2, name: 'Ahmed', amount: '40,000', date: '11 Feb, 2021 5:45 pm'},
        {id: 3, name: 'Azat', amount: '60,000', date: '29 Aug, 2021 6:30 am'},
        {id: 4, name: 'Faris', amount: '100,000', date: '28 Feb, 2021 7:15 pm'},
    ]

    return (
        <div className='px-5 pt-5 pb-5 md:px-10 md:pt-2 md:pb-8 lg:px-20 lg:pt-0 lg:pb-16'>
            <ProjectUpdatesNav onClickOption={(event) => onClickOption(event)} />
            <div style={option === 'story' ? {display:'block'} : {display: 'none'}}>
                <Story backer={1} reward={97} />
            </div>
            <div style={option === 'backerList' ? {display:'block'} : {display: 'none'}}>
                <BackerList data={dummyData} />
            </div>
        </div>
    )
}
