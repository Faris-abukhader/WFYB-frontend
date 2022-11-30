import { useFormik } from 'formik'
import * as Yup from 'yup';
import { InputWithLabel, SpinButton } from '../../components/general/general'
import { getTranslatedText as t } from '../../localization/config';
import { signIn as authSignIn } from "next-auth/react"
import { fireNotification } from '../../utils/utils'
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function SignInForm({ language }) {
    const [isLoading,setIsLoading] = useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(4).max(15).required(),

        }),
        onSubmit: values => {
            console.log(values)
            signInFunc(values)
        },
    });

    const signInFunc = async (credentials) => {
        try {
            setIsLoading(true)
            await authSignIn('credentials', {
                redirect: false,
                email: credentials.email,
                password: credentials.password,
            })
            router.push('/dashboard')

        } catch (err) {
            console.log(err)
            fireNotification({ icon: 'error', label: t('passowrdOrEmailIsNotCorrect',language) })
        } 
        setIsLoading(false)
    }
    return (
        <div dir={language == 'ar' ? 'rtl' : 'ltr'} className={`w-full h-screen flex  justify-center items-center p-3 sm:p-0 ${language == 'ar' && 'font-almarai'}`}>
            <div className='w-full sm:w-1/2 bg-gradient-to-b shadow-xl border-t -mt-20 rounded-md p-10'>
                <h1 className='text-4xl font-bold text-center text-gray-700 py-6'>{t('login', language)}</h1>
                <form onSubmit={formik.handleSubmit}>
                <InputWithLabel label={t('email', language)} name='email' value={formik.values.email} isValid={formik.errors.email ? false : true} inputHandler={formik.handleChange} />
                <InputWithLabel label={t('password', language)} name='password' value={formik.values.password} isValid={formik.errors.password ? false : true} inputHandler={formik.handleChange} />
                <button disabled={!formik.isValid} type='submit' className='w-full flex items-center justify-center space-x-2 bg-green-500 rounded-lg py-2 text-gray-100 disabled:bg-green-400 disabled:text-gray-200'>
                    {isLoading &&<SpinButton size={4}/>} <span>{t('login', language)}</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
