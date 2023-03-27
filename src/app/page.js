import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Development from '../../components/Development'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Development/>
    <main className='w-screen h-screen bg-[#5352ED] text-[#ffffff] p-[50px]'>
      {/* navbar */}
      <nav className='px-[40px]'>
        <ul className='flex gap-[30px] text-[20px] justify-end' style={{fontFamily: "'Itim', cursive"}}>
          <li className='cursor-pointer'>ABOUT</li>
          <li className='cursor-pointer'>WORK</li>
          <li className='cursor-pointer'>CONTACT</li>
        </ul>
      </nav>
      <section className=' flex items-center justify-center  gap-[30px]'>
        <div>
            <span className="text-[36px] font-bold" style={{fontFamily: "'Inter', sans-serif"}}>Hi There 👋</span>
            <h3 className="text-[64px] font-['Istok Web']" style={{fontFamily: "'Istok Web', sans-serif"}}>I'm Rajesh Biswas</h3>
            <h1 className="text-[72px] font-extrabold font-['K2D']" style={{fontFamily: "'K2D', sans-serif"}}>UI/UX DESIGNER + <br/>DEVELOPER</h1>
        </div>
        <div>
          <img
            src="assets/landing.png"
            alt='landing image'
          />
        </div>
      </section>
    </main>
    </>
  )
}

