import { useState } from 'react';
import {fireNotification} from '../utils/utils'
import axios from 'axios';
import { getTranslatedText as t } from '../localization/config';
import actionHelper from '../store/actionHelper';
import { useDispatch } from 'react-redux'
const PostRequest = ()=> {
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  async function sendPostRequest(url,payload,token,language,hasAction,action=()=>{}){
    console.log('sending request . . .')
    setIsLoading(true)
    axios.post(`${process.env.API_URL}/${url}`, { ...payload }, { headers: { token } })
    .then((res) => {
      console.log(res)
      setData(res)
      fireNotification({icon:'success',label:t(`new${url[0].toUpperCase() + url.split('/')[0].slice(1)}HasAddedSuccessfully`,language)})
      if(hasAction){
      let action = actionHelper(url,'add')
      dispatch(action(res.data))
      }
    }).catch((err) => {
      console.log(err)
      fireNotification({icon:'error',label:t('somethingWentWrong',language)})
      setIsError(true)
    })
    action()
    setIsLoading(false)  
  }    
  return {isError,isLoading,data,sendPostRequest}
}
export default PostRequest;