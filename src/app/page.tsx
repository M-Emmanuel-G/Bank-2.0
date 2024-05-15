"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, Eye } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <section>
          <Avatar  className='w-40 h-40'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className='text-center my-4'>Olá, Bem-Vindo</h2>
        </section>
        <section>
          <form>
            <div className=''>
              <Input
                placeholder='CPF'
                className='p-0 border-0 border-b-2 border-black rounded-none w-80 h-8'
              />
            </div>
            <div className='flex items-center my-8 border-0 border-b-2 border-black'>
              <Input
                placeholder='Senha'
                className=' rounded-none w-80 h-8 p-0 border-transparent'
              />
              <Eye/>
            </div>
            <div className=' w-80 flex items-center my-4 justify-end'>
              <span className='text-[10px]'>Esqueceu sua senha?</span>
              <ChevronRight width={10} height={10}/>
            </div>
          </form>
        </section>
        <section>
          <Button
          onClick={(()=>{signIn()})}
            className='w-[340px] h-12 bg-transparent text-black border-2 border-black rounded-xl hover:bg-transparent'
          >Entrar</Button>
        </section>
      </main>
  )
}
