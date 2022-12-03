import { useState } from 'react';
import {fireNotification} from '../utils/utils'
import axios from 'axios';
import { getTranslatedText as t } from '../localization/config';
import actionHelper from '../store/actionHelper';
import { useDispatch } from 'react-redux'
const DeleteRequest = ()=> {
  const dispatch = useDispatch()
  const [isDeleteError, setIsDeleteError] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [data, setData] = useState(null);

  async function sendDeleteRequest(url,token,language,hasAction,action=()=>{}){
    console.log('sending request . . .')
    setIsDeleteLoading(true)
    axios.delete(`${process.env.API_URL}/${url}`, { headers: { token } })
    .then((res) => {
      console.log(res)
      setData(res)
      fireNotification({icon:'success',label:t(`${url.split('/')[0]}HasDeletedSuccessfully`,language)})
      if(hasAction){
        let action = actionHelper(url.split('/')[0],'delete')
        dispatch(action(res.data.id))  
      }
    }).catch((err) => {
      if(err){
        console.log(err)
        fireNotification({icon:'error',label:t('somethingWentWrong',language)})
        setIsDeleteError(true)  
      }
    })
    action()
    setIsDeleteLoading(false)  
  }    
  return {isDeleteError,isDeleteLoading ,data,sendDeleteRequest}
}
export default DeleteRequest;