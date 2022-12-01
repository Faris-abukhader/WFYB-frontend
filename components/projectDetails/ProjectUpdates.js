import React from 'react'
import Story from './Story'
import CommentList from './CommentList'
import ProjectUpdatesNav from './ProjectUpdatesNav'

export default function ProjectUpdates({language,description,shortIntro,rewardList,comments}) {
    const [option, setOption] = React.useState('story')
    const onClickOption = (option)=>{
        setOption(option)
    }
    return (
        <div className='px-5 pt-5 pb-5 md:px-10 md:pt-2 md:pb-8 lg:px-20 lg:pt-0 lg:pb-16'>
            <ProjectUpdatesNav onClickOption={onClickOption} language={language} />
            {option=='story'?<Story backer={1} reward={97} language={language} shortIntro={shortIntro} description={description} rewardList={rewardList}  />:<CommentList data={comments} />}
        </div>
    )
}
