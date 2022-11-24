export default function ProgressBar({percentage=0}) {
  return (
<div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
  <div class="bg-green-500 h-2.5 rounded-full animate__animated animate__slideInLeft animate__slower" style={{width: `${percentage}%`}}></div>
</div>
  )
}
