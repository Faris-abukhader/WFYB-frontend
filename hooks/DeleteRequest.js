import { useState } from 'react';
import {fireNotification} from '../utils/utils'
import axios from 'axios';
import { getTranslatedText as t } from '../localization/config';
import actionHelper from '../store/actionHelper';
import { useDispatch } from 'react-redux'
const DeleteRequest = ()=> {
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  function sendDeleteRequest(url,token,language,action){
    console.log('sending request . . .')
    setIsLoading(true)
    axios.delete(`${process.env.API_URL}/${url}`, { headers: { token } })
    .then((res) => {
      console.log(res)
      setData(res)
      fireNotification({icon:'success',label:t(`New${url[0].toUpperCase() + url.slice(1)}HasAddedSuccessfully`,language)})
      let action = actionHelper(url,'add')
      dispatch(action(res.data))
    }).catch((err) => {
      console.log(err)
      fireNotification({icon:'error',label:t('somethingWentWrong',language)})
      setIsError(true)
    })
    action()
    setIsLoading(false)  
  }    
  return {isError,isLoading,data,sendDeleteRequest}
}
export default DeleteRequest;