"use client"

import makeTransfer from "@/app/Transfer/Actions/transfer"
import { Input } from "@/components/ui/input"
import { useSession } from "next-auth/react"
import { useState } from "react"
import Button from "../Button"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Loading from "../Loading"
  

export default function SendTransfer() {

    const [codAccount, setCodAccount] = useState<string>("")
    const [transfer, setTransfer] = useState<number>(0)

    const session = useSession()

    const sendTransfer = async ()=>{
        try {

            const loader = document.getElementById("Loading") as HTMLElement
            loader.style.display = "flex"
 
         if(!transfer) throw new Error("Valor da tranferência esta vazio");
         if(isNaN(transfer)) throw new Error("Somente numeros serão aceitos");
         if(transfer <= 0) throw new Error("Valor inválido!");
         
         await makeTransfer(
             {
                 codAccount,
                 transfer:transfer,
                 codAccountUser: String(session?.data?.user.id)
             }
         )
             
         alert("Transferência realizada com sucesso!")
         loader.style.display = "none"

        } catch (error:any) {
         alert(error.message)
        }
     }

    return (
        <AlertDialog >
            <AlertDialogTrigger className='w-72 h-10 my-4 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl flex items-center justify-center'>
                Realizar Transferência
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-white text-xl" >Realize sua transferência!</AlertDialogTitle>
                <AlertDialogDescription>
                    <div>
                        <div className="flex flex-col gap-4">
                            <strong className="text-white">Número da conta:</strong>
                            <Input
                                type="text"
                                value={codAccount}
                                onChange={((ev)=>{setCodAccount(ev.target.value)})}
                                placeholder="Digite o numero da conta!"
                            />
                            <strong className="text-white ">Valor da transferência:</strong>
                            <Input
                                value={transfer}
                                onChange={((ev)=>{setTransfer(Number(ev.target.value))})}
                                type="number"
                            />
                        </div>
                    </div>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-transparent hover:bg-transparent">
                    <Button
                        buttonName="Confirmar"
                        onClick={sendTransfer}
                    />
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            <Loading/>
        </AlertDialog>

    );
}