import { useState, useEffect } from 'react'
import { CustomModel } from '../../components/general/general'
import { AvatarPicker } from '../../components/general/general'
import { useSession } from 'next-auth/react'
import { getTranslatedText as t } from '../../localization/config'
export default function AvatarPickerModel({ show, toggle, data, updateAvatar,language }) {
    const session = useSession()
    const userId = session.data?.user?.id
    const token = session.data?.user?.token
    const [disable, setDisable] = useState(true)
    const [isValid, setValid] = useState(false)
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        if (show) {
            setAvatar(data)
        }
    }, [show])

    const validation = () => {
        if (isValid) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    const reset = () => {
        setAvatar('')
    }

    useEffect(() => {
        setValid(avatar.length > 0 ? true : false)
        validation()
    }, [avatar])

    useEffect(() => {
        console.log(avatar)
    }, [avatar])

    const close = () => {
        reset()
        toggle()
    }
    return (
        <CustomModel show={show} toggle={toggle} title={t('changeProfilePicture', language)}>
            <CustomModel.Body>
                <section className="py-1 flex items-center space-x-2">
                    <AvatarPicker label={`Account avatar`} initalAvatar={avatar} clickHandler={setAvatar} />
                </section>
            </CustomModel.Body>
            <CustomModel.Footer>
                <CustomModel.ConfirmButton disable={disable}>confirm</CustomModel.ConfirmButton>
                <CustomModel.CloseButton onClickHandler={() => toggle()}>close</CustomModel.CloseButton>
            </CustomModel.Footer>
        </CustomModel>
    )
}
