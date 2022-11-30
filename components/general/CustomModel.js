import {memo} from 'react'
export const CustomModalContent = ({ children, style}) => {
    return (
        <div className={`modal-body relative px-4 ${style}`}>
            {children}
        </div>
    )
}

export const CustomModalFooter = ({ children }) => {
    return (
        <div className="modal-footer flex space-x-4 gap-2 flex-shrink-0 flex-wrap items-center justify-end p-4 border-t  border-gray-200 rounded-b-md">
            {children}
        </div>
    )
}

export function CloseButton({children,onClickHandler}) {
    return (
      <button type="button" className="px-6 py-2.5 text-black ring appearance-none ring-gray-200 sm:outline sm:outline-gray-200 text-sm  rounded shadow-md hover:bg-gray-300 hover:shadow-lg transition duration-150 ease-in-out font-almarai" onClick={onClickHandler}>
          {children}
      </button>
   )
}

export function ConfirmButton({children,disable,onClickHandler}) {
    return (
      <button type="submit" disabled={disable} onClick={onClickHandler} className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-gray-50 hover:text-white rounded-md disabled:bg-opacity-50  appearance-none transition duration-150 ease-in-out ml-1 font-almarai">
          {children}
          </button>
      )
}
  
export const CustomModal = ({ show, toggle ,language,children,title})=> {
    
    return (
        <div dir={language=='ar'?'rtl':'ltr'} style={{ zIndex: '100', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(2px)' }} className={` modal fade fixed top-0 left-0 ${show ? ' ' : 'hidden'}   w-full h-full pb-20 outline-none overflow-x-hidden overflow-y-auto`}
            id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className={`${language == 'ar' ? 'font-almarai' : ''} modal-dialog relative mx-auto mt-28 w-11/12 sm:w-4/5 pointer-events-none animate__animated ${show && 'animate__zoomIn'}`}>
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className={`font-almarai text-2xl font-bold leading-normal text-gray-700`}>
                            {title}
                        </h5>
                        <div onClick={toggle} className={`bg-white flex justify-center items-center p-4 w-4 h-4  text-black border border-gray-100 rounded-md shadow-2xl cursor-pointer  shadow-gray-400 hover:shadow-none hover:-translate-x-0.5 hover:translate-y-0.5 transition duration-400 ease-in-out relative ${language == 'ar' ? '-left-6' : '-right-6'} -top-6 z-50}`}>×</div>
                    </div>
                    <div className="modal-body relative p-4">
                            {children}
                    </div>                   
                </div>
            </div>
        </div>
    )
}



CustomModal.Body = CustomModalContent
CustomModal.Footer = CustomModalFooter
CustomModal.CloseButton = CloseButton
CustomModal.ConfirmButton = ConfirmButton
export default (CustomModal);