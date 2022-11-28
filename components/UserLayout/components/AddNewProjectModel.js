import { CustomModel } from '../../general/general'
import {getTranslatedText as t} from '../../../localization/config'
export default function AddNewProjectModel({ show, toggle,language }) {
  return (
    <CustomModel show={show} toggle={toggle} title={t('addNewProject',language)}>
      <CustomModel.Body>
        <div>Hello faris</div>
      </CustomModel.Body>
      <CustomModel.Footer>
        <CustomModel.ConfirmButton>confirm</CustomModel.ConfirmButton>
        <CustomModel.CloseButton onClickHandler={()=>toggle()}>close</CustomModel.CloseButton>
      </CustomModel.Footer>
    </CustomModel>
  )
}
