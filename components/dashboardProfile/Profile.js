import React, { useState } from 'react'
import { getTranslatedText as t } from '../../localization/config'
import Image from 'next/image'
import AvatarPickerModel from './AvatarPickerModel'
import {InputWithLabel} from '../general/general'
export default function Profile({ language, profileImage = 'avatar-3.svg' }) {
    return (
        <div className='w-full p-8 bg-white shadow-md rounded-md'>
            <InputWithLabel/>
        </div>
    )
}
