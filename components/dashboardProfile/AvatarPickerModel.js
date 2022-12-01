import { CustomModel } from '../../components/general/general'
import { AvatarPicker } from '../../components/general/general'
import { useSession } from 'next-auth/react'
import { getTranslatedText as t } from '../../localization/config'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import PutRequest from '../../hooks/PutRequest'
export default function AvatarPickerModel({ show, toggle, data, language }) {
    const session = useSession()
    const { sendPutRequest } = PutRequest()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token

    const formik = useFormik({
        initialValues: {
            avatar: session.data?.user?.image,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            image: Yup.string().min(2).max(254).required(),
        }),
    });

    const closeRequest = () => {
        formik.resetForm()
        toggle()
    }
    const upateRequest = () => {
        console.log('from upddate function ' + formik.values.avatar)
        sendPutRequest(`auth/avatar/${userId}`, { ...formik.values }, token, language, false, closeRequest)
    }


    return (
        <CustomModel show={show} toggle={toggle} language={language} title={t('changeProfilePicture', language)}>
            <CustomModel.Body>
                <div className="py-1 flex items-center space-x-2">
                    <AvatarPicker label={``} initalAvatar={formik.values.avatar} clickHandler={(newAvatar) => formik.setValues({ 'avatar': newAvatar })} />
                </div>
            </CustomModel.Body>
            <CustomModel.Footer>
                <CustomModel.ConfirmButton onClickHandler={upateRequest} disable={formik.isValid}>confirm</CustomModel.ConfirmButton>
                <CustomModel.CloseButton onClickHandler={() => toggle()}>close</CustomModel.CloseButton>
            </CustomModel.Footer>
        </CustomModel>
    )
}
