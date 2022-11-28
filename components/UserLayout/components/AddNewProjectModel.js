import React from 'react'
import {CustomModel} from '../../general/general'
export default function AddNewProjectModel({show,toggle}) {
  return (
   <CustomModel show={show} toggle={toggle}>


    <CustomModel.Footer>
        <CustomModel.ConfirmButton>confirm</CustomModel.ConfirmButton>
    <CustomModel.CloseButton>close</CustomModel.CloseButton>
    </CustomModel.Footer>
   </CustomModel>
  )
}
