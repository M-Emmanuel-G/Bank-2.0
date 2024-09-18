"use client"

import SolicityCard from "@/app/CreditCard/Actions/SolicityCard";
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
import { useSession } from "next-auth/react";
  

export default function NewCardCredit() {

    const session = useSession()

    const newCard = async ()=>{
        try {
            
            const loader = document.getElementById("Loading") as HTMLElement
            loader.style.display = "flex"
            
            const result = await SolicityCard(session.data?.user.id as string)
            alert(result)
        
        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-white">
                 Solicitar Cartao
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Novo cartao de credito</AlertDialogTitle>
                <AlertDialogDescription>
                    Deseja solicitar um novo cartao de credito?
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={newCard}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}