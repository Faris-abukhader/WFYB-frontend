import React, { useState } from 'react'
import { getTranslatedText as t } from '../../localization/config'
import {InputWithLabel} from '../general/general'
import { useFormik } from 'formik'
import * as Yup from 'yup';
export default function Profile({ language}) {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          nationality: '',
        },
        validationSchema:Yup.object({
            firstName:Yup.string().min(2).max(50).required(),
            lastName:Yup.string().min(2).max(50).required(),
            nationality:Yup.string().min(2).max(50).required(),
       
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div className='w-full p-8 bg-white shadow-md rounded-md'>
            <h1 className='text-xl font-bold py-4'>{t('basicInfo',language)}</h1>
            <InputWithLabel label={t('firstName',language)} name='firstName' value={formik.values.firstName} isValid={formik.errors.firstName?false:true} inputHandler={formik.handleChange}/>
            <InputWithLabel label={t('lastName',language)} name='lastName' value={formik.values.lastName} isValid={formik.errors.lastName?false:true} inputHandler={formik.handleChange}/>
            <InputWithLabel label={t('nationality',language)} name='nationality' value={formik.values.nationality} isValid={formik.errors.nationality?false:true} inputHandler={formik.handleChange}/>
        </div>
    )
}
