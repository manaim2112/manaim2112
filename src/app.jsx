import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
// import './app.css'
import Header from './components/header'
import RustIcon from './icons/rust'
import TailwindIcon from './icons/tailwind'
import TauriIcon from './icons/tauri'
import CheckIcon from './icons/check'
import DownloadIcon from './icons/download'
import LauchIcon from './icons/lauch'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-br from-gray-200 via-lime-100 to-gray-200'>
        <Header/>


          <div className='mt-8 px-20 pb-20'>
            <div>
              <span className='text-4xl'>
                In My Portofolio
                </span>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8'>
                <div>
                <img className='rounded-lg hover:shadow-lg shadow-md transition-all hover:scale-105 border-4 border-white hover:border-blue-400' src="https://i.ibb.co/30r4rV8/image.png" alt="image" border="0"/>

                </div>
                <div>
                  <div className='text-3xl font-semibold uppercase '>
                    Alarm Sekolah
                  </div>
                  <div className='text-sm flex gap-2 place-items-center'>
                    <RustIcon className="w-5 h-5"></RustIcon> Rust + <TauriIcon className="h-5"/> + <TailwindIcon className="h-4 w-20" />
                  </div>
                  <div className='text-sm flex gap-2 mt-3'>
                   <CheckIcon className="w-5 h-5 text-green-400"/> Free For All
                  </div>
                  <div className='text-sm flex gap-2 mt-1'>
                   <DownloadIcon className="w-5 h-5 text-gray-800"/> only 4.28 Mb
                  </div>
                  <div className='text-sm flex gap-2 mt-1'>
                   <LauchIcon className="w-5 h-5 text-gray-800"/> Windows 7, 8, 10, 11
                  </div>
                  <div className='mt-4'>
                    Alarm Penanda bel masuk atau pulang secara gratis telah tersedia, untuk suara anda support *.mp3, *.wav, *.ogg
                    <div className='mt-3'>
                      <button className='bg-blue-400 rounded-full px-4 py-2 hover:shadow-lg transition-all text-white font-semibold hover:bg-blue-500 active:shadow-sm active:bg-blue-300'>Download Sekarang</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </>
  )
}
