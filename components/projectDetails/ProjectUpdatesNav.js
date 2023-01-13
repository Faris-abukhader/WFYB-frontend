import { getTranslatedText as t } from "../../localization/config"
import { useState } from "react"
export default function ProjectUpdatesNav({ onClickOption, language }) {
    const [selected, setSelected] = useState('story')

    const handleClick = (option) => {
        setSelected(option)
        onClickOption(option)
    }

    return (
        <div className='shadow-[0_5px_20px_0px_rgba(0,0,0,0.1)] mb-8'>
            <ul>
                <li onClick={() => handleClick('story')} 
                    className={`font-bold text-xl p-5 px-10 border-green-500 ${selected === 'story' && `border-b-4 text-green-500`} focus:text-green-500 hover:cursor-pointer hover:text-green-500`}>
                    {t('story', language)}
                </li>
                <li onClick={() => handleClick('commentsList')} className={`font-bold text-xl p-5 px-10 border-green-500 ${selected === 'commentsList' && `border-b-4 text-green-500`} focus:text-green-500 hover:cursor-pointer hover:text-green-500`}>
                    {t('commentsList', language)}
                </li>
            </ul>
        </div>
    )
}
