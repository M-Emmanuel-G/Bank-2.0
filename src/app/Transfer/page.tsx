"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import NavBar from "../components/NavBar";
import makeTransfer from "./Actions/transfer";

export default function Transfer() {

    const [codAccount, setCodAccount] = useState<string>("")
    const [transfer, setTransfer] = useState<number>(0)

    const session = useSession()

    const sendTransfer = async ()=>{
       try {

        if(!transfer) throw new Error("Valor da tranferência esta vazio");
        if(isNaN(transfer)) throw new Error("Somente numeros serão aceitos");
        if(transfer <= 0) throw new Error("Valor inválido!");
        
        await makeTransfer(
            {
                codAccount,
                transfer:String(transfer),
                codAccountUser: String(session.data?.user.id)
            }
        )

        alert("transferencia realizada com sucesso!")
        
       } catch (error:any) {
        alert(error.message)
       }
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-black">
            <section className="w-full h-[90%] flex flex-col relative ">
                <h2 className="text-2xl text-white text-center my-8">Transferencias</h2>
                <section>
                    <div className=" w-full h-1/2 flex flex-col text-center">
                        <div className=" w-full my-2">
                            <strong className="text-white">Numero da conta:</strong>
                            <input
                                 className="w-80 h-10"
                                value={codAccount}
                                onChange={((ev)=>{setCodAccount(ev.target.value)})}
                            />
                        </div>
                        
                        <div className=" w-full h-1/2 items-center my-8 flex flex-col">
                            <strong className="text-white text-start ">Valor da transferência:</strong>
                            <input 
                                value={transfer}
                                onChange={((ev)=>{setTransfer(Number(ev.target.value))})}
                                type="number"
                                className="w-80 h-10"
                            />
                        </div>
                        <div className="my-2">
                            <Button className="w-80 h-10" onClick={sendTransfer}> Confirmar</Button>
                        </div>
                    </div>
                </section>
            </section>
            <NavBar/>
        </main>
    );
}