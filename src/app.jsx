import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
// import './app.css'
import Header from './components/header'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-br from-white via-yellow-100 to-lime-200'>
        <Header/>


          <div className='mt-8'>
            <div className='font'
          </div>
      </div>
    </>
  )
}
