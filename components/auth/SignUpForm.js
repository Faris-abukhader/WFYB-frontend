import { useFormik } from 'formik'
import * as Yup from 'yup';
import { InputWithLabel, SelectList, SpinButton } from '../../components/general/general'
import { getTranslatedText as t } from '../../localization/config';
import { signIn as authSignIn } from "next-auth/react"
import { fireNotification } from '../../utils/utils'
import { useRouter } from 'next/router';
import { useState } from 'react';
import PostRequest from '../../hooks/PostRequest';
export default function SignUpForm({ language }) {
    const {sendPostRequest} = PostRequest()
    const [isLoading,setIsLoading] = useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            accountType:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(4).max(15).required(),
            firstName:Yup.string().min(2).max(25).required(),
            lastName:Yup.string().min(2).max(25).required(),
            accountType:Yup.string().required(),
        }),
        onSubmit: values => {
            console.log(values)
            sendPostRequest('auth/signUp',{...values},process.env.WEBSITE_TOKEN,language,false)
            .then((res)=>{
                router.push('/auth/signIn')
            })
            .catch((err)=>{
                if(err){
                    fireNotification({ icon: 'error', label: t('somethingWentWrong',language) })
                }
            })
        },
    });

    return (
        <div dir={language == 'ar' ? 'rtl' : 'ltr'} className={`w-full h-screen flex  justify-center items-center p-3 sm:p-0 mt-10 ${language == 'ar' && 'font-almarai'}`}>
            <div className='w-full sm:w-1/2 bg-gradient-to-b shadow-xl border-t -mt-20 rounded-md p-10'>
                <h1 className='text-4xl font-bold text-center text-gray-700 py-6'>{t('login', language)}</h1>
                <form onSubmit={formik.handleSubmit}>
                <InputWithLabel label={t('email', language)} name='email' value={formik.values.email} isValid={formik.errors.email ? false : true} inputHandler={formik.handleChange} />
                <InputWithLabel label={t('password', language)} name='password' type='password' value={formik.values.password} isValid={formik.errors.password ? false : true} inputHandler={formik.handleChange} />
                <InputWithLabel label={t('firstName', language)} name='firstName' value={formik.values.firstName} isValid={formik.errors.firstName ? false : true} inputHandler={formik.handleChange} />
                <InputWithLabel label={t('lastName', language)} name='lastName' value={formik.values.lastName} isValid={formik.errors.lastName ? false : true} inputHandler={formik.handleChange} />
                <SelectList onChange={formik.handleChange} name={`accountType`} isValid={formik.errors.accountType ? false : true} label={t('accountType', language)}>
                    <SelectList.Option value={`s`}>{t('starter',language)}</SelectList.Option>
                    <SelectList.Option value={`b`}>{t('backer',language)}</SelectList.Option>
                </SelectList>
                <button disabled={!formik.isValid} type='submit' className='w-full flex items-center justify-center space-x-2 bg-green-500 rounded-lg py-2 text-gray-100 disabled:bg-green-400 disabled:text-gray-200'>
                    {isLoading &&<SpinButton size={4}/>} <span>{t('login', language)}</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
