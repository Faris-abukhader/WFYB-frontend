export default function PulseButton({children,hasHandler=true,handler}) {
    const onClickHandler = ()=>{
        if(hasHandler){
            handler()
        }
    }
    return (
        <button onClick={onClickHandler} className="flex w-[20px] h-[20px] items-center justify-center hover:cursor-pointer">
            <span className="animate-ping absolute inline-flex h-[40px] w-[40px] rounded-md bg-green-400 opacity-75"></span>
            <span className="animate-ping absolute inline-flex h-[40px] w-[40px] rounded-md bg-green-400 opacity-75 transition-all delay-100 duration-100"></span>
            <span className="p-4 text-white font-bold">{children}</span>
        </button>
    )
}
