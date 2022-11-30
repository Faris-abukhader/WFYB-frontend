import Image from "next/image"
export default function AddButton({onClick,id=''}) {
  return (
    <button type='button' onClick={()=>onClick(id)} className="w-[30px] h-[30px] border-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer flex items-center justify-center rounded-full border-red-600">
        <Image src={`/icons/delete.svg`} width={14} height={14} alt='edit'/>
    </button>
  )
}
