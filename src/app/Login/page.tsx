"use client"

import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoIcon from "../assets/IconLogo.png"
import Link from "next/link";
import { Loader } from "../components/Loader";
import Loading from "../components/Loading";

export default function Login() {

    const [cpf, setCpf] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    
    const router = useRouter()
    
    const login = async (ev:React.FormEvent<HTMLFormElement>)=>{
        try {
        ev.preventDefault()
        const loader = document.getElementById("Loading") as HTMLElement

            const data = {
                cpf,
                password
            }
    
            const res = await signIn("credentials",{
                redirect:false,
                ...data,
            })

            if(res?.error) throw new Error(res.error);
            loader.style.display = "flex"
            router.push("/Home")
            
        } catch (error:any) {
            alert(error.message)
        }
    }

    const showPassword = ()=>{
        const pass = document.getElementById("pass") as HTMLInputElement
        const eyeOff = document.getElementById("eyeOff") as any
        const eye = document.getElementById("eye") as any

        if(pass.type === "password"){
            pass.type = "text"
            eyeOff.style.display = 'none'
            eye.style.display = 'flex'
        }else{
            pass.type = "password"
            eyeOff.style.display = 'flex'
            eye.style.display = 'none'
        }
    }

    const goToBack = ()=>{
        const loader = document.getElementById("Loading") as HTMLElement
        loader.style.display = "flex"
        
        router.push("/")
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <section className="flex flex-col justify-center items-center">
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
                            className='outline-none p-0 border-0 border-purple-600 rounded-none w-72 h-8 text-white focus:outline-none bg-transparent border-b-2'
                            maxLength={11}
                        />
                    </div>
                    <div className='flex items-center my-8 border-0 border-b-2 border-black'>
                        <input
                            id="pass"
                            type="password"
                            value={password}
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                            placeholder='Senha'
                            className='outline-none rounded-none w-72 h-8 p-0 border-0 bg-transparent border-b-2 text-white border-purple-600'
                            maxLength={6}
                        />
                        <EyeOff id="eyeOff" className="flex" onClick={showPassword} style={{color:"white"}}/>
                        <Eye id="eye" className="hidden" onClick={showPassword} style={{color:"white"}}/>
                    </div>
                    <div className=' w-80 flex items-center my-4 justify-end right-4 relative bottom-6'>
                        <Link href={"/RecoveryPass"} className='text-[10px] text-white'>Esqueceu sua senha?</Link>
                        <ChevronRight style={{color:"white"}} width={10} height={10}/>
                    </div>
                    <div className=" w-full flex flex-col items-center">
                        <Button className="w-72 h-10 my-2 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 ">Entrar </Button>
                        <Button type="button" onClick={goToBack} className="w-72 h-10 my-2 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:bg-gradient-to-r">Voltar</Button>
                    </div>
                </form>
            </section>
            <Loading/>
        </main>
    );
}