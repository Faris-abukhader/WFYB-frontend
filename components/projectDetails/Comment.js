import Image from 'next/image'
import Replay from './Replay'
export default function Comment({ backer, content, replies }) {
  return (
    <div>
      <div className='w-full bg-zinc-200 rounded-md p-3'>
        <div className='flex items-center gap-2'>
          <Image src={`/avatar/${backer.user.avatar}`} width={25} height={25} className='rounded-full' alt='avatar' />
          <p>{backer.user.firstName + ' ' + backer.user.lastName}</p>
        </div>
        <h1 className='text-gray-600 py-2 px-8'>{content}</h1>
        {replies.length > 0 && <ul className='px-4  p-3 rounded-md'>
          {replies && replies.map((reply, index) => <Replay key={index} {...reply} />)}
        </ul>}
      </div>
    </div>
  )
}
