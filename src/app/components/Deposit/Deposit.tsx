"use client"

import MakeDeposit from "@/app/Deposit/Actions/deposit";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";

interface DepositProps{
    deposit:{
        id:string,
        userName:string
    }
}
  
export default function DepositComponent({deposit}:DepositProps) {

    const [value, setValue]  = useState<number>(0)
    const router = useRouter()

    const makeDeposit = async ()=>{

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
                <Button
                    buttonName="Realizar deposito"
                />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black flex flex-col items-center">
                <AlertDialogTitle className="text-white">{deposit.userName},</AlertDialogTitle>
                <strong className="text-white ">Valor para depositar: </strong>
                <Input 
                    value={value}
                    type="number"
                    onChange={(ev)=>{setValue(Number(ev.target.value))}}
                    placeholder="Valor do deposito"
                />
                <Button 
                    buttonName="Cancelar"
                    onClick={()=>{router.push("/Home")}}
                />
                <Button
                    onClick={makeDeposit}
                    buttonName="Confirmar"
                />
            </AlertDialogContent>
        </AlertDialog>
    );
}