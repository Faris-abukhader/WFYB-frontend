import React, { useState } from 'react'
import { getTranslatedText as t } from '../../localization/config'
import {InputWithLabel} from '../general/general'
import { getTranslatedText as t } from '../../localization/config'
export default function Profile({ language, profileImage = 'avatar-3.svg' }) {
    return (
        <div className='w-full p-8 bg-white shadow-md rounded-md'>
            <h1></h1>
            <InputWithLabel/>
            <InputWithLabel/>
        </div>
    )
}
