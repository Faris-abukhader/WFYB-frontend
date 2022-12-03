export default function ProjectCardSketelon() {
  return (
    <div className="border border-opacity-10 shadow rounded-md p-4 max-w-sm w-full h-[350px] mx-auto">
    <div className="animate-pulse gap-4 space-y-4 h-1/4">
      <div className=" bg-slate-200 h-[120px] w-full rounded-md relative">
      </div>
      <div className="flex-1 space-y-6 py-1">
        <div name='title' className="h-2 w-1/2 bg-slate-200 rounded"></div>
        <div name='raised_percentage' className='flex items-center justify-between'>
        <div className="h-2 w-8 bg-slate-200 rounded"></div>
        <div className="h-2 w-8 bg-slate-200 rounded"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className='flex justify-end'>
        <div className="h-2 w-8 bg-slate-200 rounded"></div>
        </div>
        <div className="h-6 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
  )
}
