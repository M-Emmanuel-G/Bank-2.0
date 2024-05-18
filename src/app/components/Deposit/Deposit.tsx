"use client"

import MakeDeposit from "@/app/Deposit/Actions/deposit";
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
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DepositProps{
    deposit:{
        id:string,
        userName:string
    }
}
  
export default function DepositComponent({deposit}:DepositProps) {

    const [value, setValue]  = useState<number>(0)

    const update = async ()=>{

        try {

            if(!value) throw new Error("O valor nao foi inserido!");
            if(isNaN(value)) throw new Error("Serão aceito somente numeros!");
            if(value < 0) throw new Error(" O valor nao pode ser negativo!");

            const data = {
                id: deposit.id,
                value: value
            }

            await MakeDeposit({deposit:data})

            alert("O valor foi depositado com sucesso!")

        } catch (error:any) {
            alert(error.message)
        }

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="my-2">Realizar Deposito</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{deposit.userName},</AlertDialogTitle>
                <AlertDialogDescription>
                    <strong>Valor para depositar: </strong>
                    <input
                        className="w-20 text-center h-12 text-sm outline-none mx-4"
                        value={value}
                        type="number"
                        onChange={(ev)=>{setValue(Number(ev.target.value))}}
                        placeholder="Valor do deposito"
                    />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={update}>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}