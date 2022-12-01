import { getTranslatedText as t } from '../../localization/config'
import {InputWithLabel} from '../general/general'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useSession } from 'next-auth/react';
import { ConfirmButton } from '../general/CustomModel';
import PutRequest from '../../hooks/PutRequest';
export default function Profile({ language}) {
  const {sendPutRequest} = PutRequest()
  const session = useSession()
  const token = session.data?.user?.token
  const id = session.data?.user?.id
    const formik = useFormik({
        initialValues: {
          firstName: session.data?.user?.name.split(' ')[0],
          lastName: session.data?.user?.name.split(' ')[1],
          nationality: session.data?.user?.nationality,
        },
        enableReinitialize:true,
        validationSchema:Yup.object({
            firstName:Yup.string().min(2).max(50).required(),
            lastName:Yup.string().min(2).max(50).required(),
            nationality:Yup.string().min(2).max(50).required(),
       
        }),
        onSubmit: values => {
          sendPutRequest(`auth/${id}`,{...values},token,language,false)
        },
      });
    return (
        <form onSubmit={formik.handleSubmit} className='w-full p-8 bg-white shadow-md rounded-md'>
            <h1 className='text-xl font-bold py-4 font-almarai'>{t('basicInfo',language)}</h1>
            <InputWithLabel label={t('firstName',language)} name='firstName' value={formik.values.firstName} isValid={formik.errors.firstName?false:true} inputHandler={formik.handleChange}/>
            <InputWithLabel label={t('lastName',language)} name='lastName' value={formik.values.lastName} isValid={formik.errors.lastName?false:true} inputHandler={formik.handleChange}/>
            <InputWithLabel label={t('nationality',language)} name='nationality' value={formik.values.nationality} isValid={formik.errors.nationality?false:true} inputHandler={formik.handleChange}/>
            <div className='flex justify-end pt-5'>
            <ConfirmButton>{t('confirm',language)}</ConfirmButton>
            </div>
        </form>
    )
}
