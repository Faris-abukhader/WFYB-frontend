export default function ProgressBar({percentage=0,language}) {
  return (
<div dir={language=='ar'?'rtl':'ltr'} className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
  <div className="bg-green-500 h-2.5 rounded-full animate__animated animate__slideInLeft animate__slower" style={{width: `${percentage}%`}}></div>
</div>
  )
}
