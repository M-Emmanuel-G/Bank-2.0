"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Eye } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoIcon from "../assets/LogoIcon.jpg"

export default function Login() {

    const [cpf, setCpf] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const router = useRouter()

    const login = (ev:React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault()

        try {
            const data = {
                cpf,
                password
            }
    
            signIn("credentials",{
                ...data,
                callbackUrl:"/Home" 
            })
        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <section>
                <form onSubmit={login}>
                    <div className="flex justify-center">
                    <Image
                        className='w-40 h-40 rounded-3xl'
                        src={LogoIcon} alt='Logotipo' width={0} height={0} sizes='100vw' quality={100}
                    />
                    </div>

                    <div>
                        <h2 className="text-2xl text-center my-8 text-white">Acesse sua conta</h2>
                    </div>
                    <div className=''>
                        <input
                            value={cpf}
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                            style={{outline:"none"}}
                            placeholder='CPF'
                            className='outline-none p-0 border-0 border-white rounded-none w-80 h-8 text-white focus:outline-none bg-transparent border-b-2'
                            maxLength={11}
                        />
                    </div>
                    <div className='flex items-center my-8 border-0 border-b-2 border-black'>
                        <input
                            type="password"
                            value={password}
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                            placeholder='Senha'
                            className='outline-none rounded-none w-80 h-8 p-0 border-0 border-transparent bg-transparent border-b-2 text-white border-white'
                            maxLength={6}
                        />
                        <Eye/>
                    </div>
                        <div className=' w-80 flex items-center my-4 justify-end'>
                        <span className='text-[10px]'>Esqueceu sua senha?</span>
                        <ChevronRight width={10} height={10}/>
                    </div>
                    <div className=" w-full flex flex-col">
                        <Button className="w-80 h-10 my-2 text-xl hover:bg-cyan-600 bg-cyan-600">Entrar</Button>
                        <Button type="button" onClick={()=>{router.push("/")}} className="w-80 h-10 my-2 text-xl bg-cyan-600 hover:bg-cyan-600">Voltar</Button>
                    </div>
                </form>
            </section>
        </main>
    );
}