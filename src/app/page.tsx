"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LogoIcon from "../app/assets/IconLogo.png"
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {

  const router = useRouter()

  

  return (
      <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
        <section className=' w-96 flex flex-col items-center my-4'>
          <Image
              className='w-40 h-40 rounded-3xl'
              src={LogoIcon} alt='Logotipo' width={0} height={0} sizes='100vw' quality={100}/>
          <h2 className='text-white text-center text-3xl my-4'>Dev Bank</h2>
          <span className='text-white text-center text-sm my-4'>Bem vindo ao banco digital que simplifica sua vida. Um banco digital feito para atender suas necessidades!</span>
        </section>
        <section className=' w-96 items-center flex flex-col'>
          <Button className='w-64 h-10 my-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xl' onClick={()=>{signIn()}}>Acesse sua conta</Button>
          <Button className='w-64 h-10 my-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-xl' onClick={()=>{router.push("/Signup")}}>Crie sua conta</Button>
        </section>
      </main>
  )
}
