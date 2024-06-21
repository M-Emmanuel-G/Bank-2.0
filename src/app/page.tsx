"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LogoIcon from "../app/assets/IconLogo.png"
import { signIn } from 'next-auth/react'

export default function Home() {

  const router = useRouter()

  

  return (
      <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
        <section className='my-8'>
          <Image
              className='w-40 h-40 rounded-3xl'
              src={LogoIcon} alt='Logotipo' width={0} height={0} sizes='100vw' quality={100}/>
        </section>
        <section className='flex flex-col'>
          <Button className='w-64 h-10 my-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xl' onClick={()=>{signIn()}}>Acesse sua conta</Button>
          <Button className='w-64 h-10 my-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xl' onClick={()=>{router.push("/Signup")}}>Crie sua conta</Button>
        </section>
      </main>
  )
}
