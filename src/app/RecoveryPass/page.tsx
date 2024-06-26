"use client"

import Image from "next/image";
import LogoIcon from "../assets/IconLogo.png"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import  emailjs  from '@emailjs/browser';
import RecPass from "./Actions/recPass";
import { useRouter } from "next/navigation";

export default function RecoveryPass() {

    const [email, setEmail] = useState<string>("")

    const router = useRouter()

    const sendEmail = async (ev:any)=>{

        ev.preventDefault()

        const firstNumber = Math.floor(Math.random() * 9)
        const secondNumber = Math.floor(Math.random() * 9)
        const threeNumber = Math.floor(Math.random() * 9)
        const fourNumber = Math.floor(Math.random() * 9)
        const fiveNumber = Math.floor(Math.random() * 9)
        const sixNumber = Math.floor(Math.random() * 9)

        const newPass = `${firstNumber}${secondNumber}${threeNumber}${fourNumber}${fiveNumber}${sixNumber}`

        await RecPass({email, newPass})

        const templateMessage = {
            email,
            newPassword: newPass
        }

        emailjs.send('service_ve702oh', 'template_12p0cbn', templateMessage, '5ZxPWFsvg_-WP62gn')

        alert("Email enviado com sucesso!")
        
        router.push("/")

    }

    return (
        <main className="w-screen h-screen flex flex-col bg-black items-center justify-center">
            <Image
                className='w-40 h-40 rounded-3xl'
                src={LogoIcon} alt='Logotipo' width={0} height={0} sizes='100vw' quality={100}
            />
            <h2 className="text-white text-xl my-4">Recuperação de senha!</h2>
            <div className="w-72 text-center">
                <span className="text-white my-4 text-[12px] text-center">Digite seu email e lhe enviaremos instruções de como recuperar seu acesso!</span>
            </div>
            <form className="flex flex-col items-center" onSubmit={sendEmail}>
                <input
                    type="email"
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                    style={{outline:"none"}}
                    placeholder='Email'
                    className=' mt-4 outline-none p-0 border-0 border-purple-600 rounded-none w-72 h-8 text-white focus:outline-none bg-transparent border-b-2'
                />
                <Button className="w-72 h-10 my-6 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 ">Enviar </Button>
            </form>
        </main>
    );
}