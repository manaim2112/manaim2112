import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
// import './app.css'
import Header from './components/header'
import RustIcon from './icons/rust'
import TailwindIcon from './icons/tailwind'
import TauriIcon from './icons/tauri'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-br from-gray-200 via-lime-100 to-gray-200'>
        <Header/>


          <div className='mt-8 px-20 pb-20'>
            <div className='text-4xl'>
              In My Portofolio
              <div className='grid grid-cols-2 gap-3 mt-8'>
                <div>
                <img className='rounded-lg hover:shadow-lg transition-all hover:scale-110 hover:border-4 hover:border-blue-400' src="https://i.ibb.co/30r4rV8/image.png" alt="image" border="0"/>

                </div>
                <div>
                  <div className='text-3xl font-semibold uppercase '>
                    Alarm Sekolah
                  </div>
                  <div className='text-sm flex gap-2 place-items-center'>
                    <RustIcon className="w-5 h-5"></RustIcon> Rust + <TauriIcon className="h-5"/> + <TailwindIcon className="h-3" />
                  </div>
                  <div className='text-sm'>
                    Free For All
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </>
  )
}
