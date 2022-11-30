import { useEffect, useRef, useState } from 'react'

const ListItem = ({ children, hasHandler = false, onClick}) => {
    return (
        <div onClick={() => { if (hasHandler) { onClick() } }} className={`font-almarai text-sm px-5 py-1 w-full hover:translate-x-1 hover:bg-green-100 hover:text-green-600 hover:font-bold  transition-transform duration-200 hover:cursor-pointer rounded-lg`} >{children} </div>
    )
}

const DefaultComponent = ({isValid=true,label=''})=>{
    return (
        <div className={`appearance-none w-full border ${isValid ? 'border-green-300' : ' border-red-400'} focus:outline-none disabled:bg-white  w-full h-[38px] m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 text-sm text-center`}>{label}</div>
    )
}

const CustomDropdown = ({ children, Component,language,fixed=false}) => {
    const componentRef = useRef(null)
    const [showList, setShowList] = useState(false)

    // to handle if the next click was outside the component (to close it)
    const handleClickOutSideComponent = (e) => {
        try {
            if (!componentRef.current?.contains(e.target)) {
                setShowList(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    // add event to click listener to close the dropdown if the click was outside it
    useEffect(() => {
        document.addEventListener('click', handleClickOutSideComponent)
    }, [])

    return (
        <div dir={language=='ar'?'rtl':'ltr'} ref={componentRef} className=" inline-block w-full">
            <div onClick={() => setShowList(!showList)} className='relative'>
                <Component />
                <div onClick={() => setShowList(false)} className={`${showList ? 'block animate__animated animate__fadeIn' : 'hidden'} origin-top-right absolute ${language=='ar'?'left-0':'right-0'} mt-2  min-w-[180px] max-w-[250px] ${fixed && 'w-[250px]'} min-h-min overflow-scroll p-3 rounded-md shadow-2xl bg-white z-20 focus:outline-none"`}>
                {children}
            </div>
            </div>
        </div>
    )
}

CustomDropdown.Item = ListItem
CustomDropdown.DefaultComponent = CustomDropdown
export default CustomDropdown




