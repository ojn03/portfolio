import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import GA from '@/components/Analytics'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olivier-John Nzia',
  description: 'A cool guy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' m-0 p-0 '>
      <GA GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID}/>
   <head>
       
        <link rel='icon' href='/icon.svg' />
      </head>
      <body className='m-0 p-0 w-screen h-screen bg-light -z-10 flex flex-col'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
