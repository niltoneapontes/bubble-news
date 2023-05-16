import { useEffect } from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/home"
    }, 3000)
  }, [])

  return (
    <div className='flex items-center justify-center bg-black w-screen h-screen'>
      <Logo className="w-44"/>
    </div>
  )
}
