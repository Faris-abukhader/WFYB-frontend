export default function InputWithLabel({value='',name='',type='text',isValid=true,label,hasHandler=true,inputHandler,withIndex=false,index=0,isTextArea=false,onBlur}) {
  
    const handler = (e)=>{
      if(hasHandler){
        if(withIndex){
          inputHandler(e,index)
        }else{
          inputHandler(e)
        }
      }
    }

    const handleOnBlur = (e)=>{
      if(hasHandler){
        onBlur(e)
      }
    }
    
    return (
      <div className='w-full flex-row justify-center items-start'>
      <h1 className={`text-xs pb-1 ${isValid ? 'text-gray-400' : 'text-red-400'}`}>{label}</h1>
      {isTextArea?
    <textarea className={`appearance-none w-full border ${isValid ? 'border-blue-400' : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type} onChange={handler} onBlur={onBlur}/>
    :
    <input className={`appearance-none w-full border ${isValid ? 'border-blue-400' : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 ${!hasHandler && 'border-0'} text-sm`} disabled={!hasHandler} name={name} value={((value?.length<1) && !hasHandler) ? '. . .':value} type={type} onChange={handler} onBlur={onBlur}/>
    }
      </div>
    )
  }
  