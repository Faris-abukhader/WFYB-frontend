export default function InputWithLabel({value='',name='',type='text',isValid=true,label,hasHandler=true,inputHandler,withIndex=false,index=0,isTextArea=false,borderColor='border-green-300'}) {
  
    const handler = (e)=>{
      if(hasHandler){
        if(withIndex){
          inputHandler(e,index)
        }else{
          inputHandler(e)
        }
      }
    }
    
    return (
      <div className='w-full flex-row justify-center items-start'>
      <h1 className={`text-xs pb-1 ${isValid ? 'text-gray-400' : 'text-red-400'} font-almarai`}>{label}</h1>
      {isTextArea?
    <textarea className={`appearance-none w-full border ${isValid ? borderColor : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type} onChange={handler}/>
    :
    <input className={`appearance-none w-full border ${isValid ? borderColor : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type} onChange={handler}/>
    }
      </div>
    )
  }
  