import { useState } from 'react';
import {fireNotification} from '../utils/utils'
import axios from 'axios';
import { getTranslatedText as t } from '../localization/config';
import actionHelper from '../store/actionHelper';
import { useDispatch } from 'react-redux'
const GetRequest = ()=> {
  const dispatch = useDispatch()
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  function sendGetRequest(url,token,hasAction=true){
    console.log('sending request . . .')
    setIsLoading(true)
    axios.get(`${process.env.API_URL}/${url}`, { headers: { token } })
    .then((res) => {
      setData(res.data.data??[])
      if(hasAction){
        let action = actionHelper(url.split('/')[0],'set')
        dispatch(action(res.data.data??[]))  
      }
    }).catch((err) => {
      console.log(err)
      setIsError(true)
    })
    setIsLoading(false)  
  }    
  return {isError,isLoading,data,sendGetRequest}
}
export default GetRequest;