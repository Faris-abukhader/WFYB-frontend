export const SelectList = ({ children, isValid = true, hasLabel = true, label = '',onChange,name }) => {
    return (
        <>
            {hasLabel && <h1 className={`text-xs pb-1 ${isValid ? 'text-gray-400' : 'text-red-400'}`}>{label}</h1>}
            <select name={name} onChange={onChange} class={`appearance-none w-full border ${isValid ? 'border-green-300' : ' border-red-400'} focus:outline-none disabled:bg-white  px-3 py-2 m-0 text-gray-500 mb-3  bg-transparent  rounded-md p-1 text-sm`}>
                {children}
            </select>
        </>
    )
}

export const Option = ({ children, value}) => {
    return (
        <option value={value}>{children}</option>
    )
}

SelectList.Option = Option
export default SelectList;
