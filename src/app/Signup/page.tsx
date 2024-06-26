"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import MakeSignup from "./Actions/signup";
import { useRouter } from "next/navigation";

export default function Signup() {

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [BirthDate, setBirthDate] = useState<string>("")
    const [fullAddress, setFullAddress] = useState<string>("")
    const [codPostal, setCodPostal] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [rg, setRG] = useState<string>("")
    const [income, setIncome] = useState<number>(0)
    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [confirmPass, setConfirmPass] = useState<string>("")

    const router = useRouter()
   

    const signUp = async(ev:any) => {
        ev.preventDefault();
        try {
            if(!firstName || !lastName || !BirthDate || !fullAddress || !codPostal || !phone || !cpf || !rg || !income || !userName || !email || !pass || !confirmPass) throw new Error("Todos os campos precisam ser preenchidos!");
            if(!email.includes("@") || !email.includes(".com")) throw new Error("Formato de email inválido!");
            if(cpf.length !== 11) throw new Error("CPF precisa conter 11 digitos!");
            if(pass.length !== 6) throw new Error("Senha precisa conter 6 digitos!");
            if(pass !== confirmPass) throw new Error("As senhas precisam ser iguais!");
            
            // const verifyRG = await db.clients.findUnique({
            //     where:{
            //         RG: rg
            //     }
            // })
            // const verifyCPF = await db.clients.findUnique({
            //     where:{
            //         CPF: cpf
            //     }
            // })
            // const verifyEmail = await db.clients.findUnique({
            //     where:{
            //         email: email
            //     }
            // })

            // if(!verifyCPF) throw new Error("Este CPF ja esta sendo utilizado por outro usuário!");
            // if(!verifyEmail) throw new Error("Este Email ja esta sendo utilizado por outro usuário!");
            // if(!verifyRG) throw new Error("Este RG ja esta sendo utilizado por outro usuário!");

            await MakeSignup(
                {
                    birthDate:BirthDate,
                    codPostal,
                    CPF:cpf,
                    email,
                    firstName,
                    fullAddress,
                    income,
                    lastName,
                    password:pass,
                    phone,
                    RG:rg,
                    userName
                }
            )
            
            alert("Usuario criado com sucesso!")
            router.push("/")
            
            
        } catch (error:any) {
            alert(error.message)
        }
      };

    return (
        <main className="w-screen h-screen flex flex-col bg-black items-center">
            <header className="w-full h-[10%] flex justify-center items-center">
                <h2 className="text-white text-2xl">Informe seus dados:</h2>
            </header>
            <section className="w-full h-[80%] flex">
                <form onSubmit={signUp} className="w-full flex flex-col items-center overflow-y-auto">
                    <div className=" flex flex-col my-2">
                        <strong className="text-white"> Primeiro nome: </strong>
                        <input onChange={((ev)=>{setFirstName(ev.target.value)})} value={firstName}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Sobrenome:</strong>
                        <input onChange={((ev)=>{setLastName(ev.target.value)})} value={lastName}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Data de Nascimento:</strong>
                        <input onChange={((ev)=>{setBirthDate(ev.target.value)})} value={BirthDate}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Endereço completo:</strong>
                        <input onChange={((ev)=>{setFullAddress(ev.target.value)})} value={fullAddress}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">CEP:</strong>
                        <input onChange={((ev)=>{setCodPostal(ev.target.value)})} value={codPostal}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Telefone:</strong>
                        <input onChange={((ev)=>{setPhone(ev.target.value)})} value={phone}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Email:</strong>
                        <input type="email" onChange={((ev)=>{setEmail(ev.target.value)})} value={email}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">CPF:</strong>
                        <input onChange={((ev)=>{setCpf(ev.target.value)})} value={cpf}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">RG:</strong>
                        <input onChange={((ev)=>{setRG(ev.target.value)})} value={rg}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white" > Renda mensal:</strong>
                        <input onChange={((ev)=>{setIncome(Number(ev.target.value))})} value={income}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Nome de usuário:</strong>
                        <input onChange={((ev)=>{setUserName(ev.target.value)})} value={userName}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Crie uma senha:</strong>
                        <input type="password"  onChange={((ev)=>{setPass(ev.target.value)})} value={pass}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <div className=" flex flex-col my-2">
                        <strong className="text-white">Confirme sua senha:</strong>
                        <input  type="password" onChange={((ev)=>{setConfirmPass(ev.target.value)})} value={confirmPass}  className="w-80 h-10 outline-none my-2 text-white bg-transparent border-b-2 border-purple-600"/>
                    </div>
                    <Button className="my-4 w-80 h-10 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:bg-gradient-to-r">Confirmar</Button>
                    <Button onClick={()=>{router.push("/")}} type="button" className="my-4 w-80 h-10 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:bg-gradient-to-r">Voltar</Button>
                </form>
            </section>
        </main>
    );
}