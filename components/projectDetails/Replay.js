import Image from 'next/image'
export default function Replay({owner,content}) {
  return (
    <li>
      <div className='flex items-center gap-2'>
        <Image src={`/avatar/${owner.avatar}`} width={25} height={25} className='rounded-full' alt='avatar' />
        <p>{owner.firstName + ' ' + owner.lastName}</p>
      </div>
      <h1 className='text-gray-600 py-2 px-8'>{content}</h1>
    </li>
  )
}
