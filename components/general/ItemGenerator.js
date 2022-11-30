import {memo} from 'react'
import { ConfirmButton } from './CustomModel'
export const ItemGenerator = ({ showAddButton = true, addButtonLabel = 'add', addButtonHandler, hasHandler = true,hasLabel=true,label='',language, children }) => {

    const clickHandler = () => {
        if (hasHandler) {
            addButtonHandler()
        }
    }
    return (
        <div className='text-gray-600 w-full'>
            {hasLabel && <h1 className='text-xl font-almarai text-slate-700 font-bold'>{label}</h1>}
            <section className=''>
                {children}
            </section>
            <hr />
            <div className={`flex ${language=='ar'?'justify-start':'justify-end'} p-2`}>
            {showAddButton && <ConfirmButton onClickHandler={clickHandler}>{addButtonLabel}</ConfirmButton>}
            </div>
        </div>
    )
}

export default memo(ItemGenerator)