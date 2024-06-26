"use client"

import UpdateCard from "@/app/CreditCard/Actions/UpdateCard"
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
import { TypeCreditCard } from "@prisma/client"
import { useState } from "react"

interface TypeCardProps{
    idCard:string
    idType:string
    category:string
}

interface DataProps{
    idCard:string
    idType:string
}

  export default function UpdateCardCredit(params:any) {

    const [idType, setIdType] = useState("")

    const upgradeCard = async ()=>{
        try {
        
            const data:DataProps = {
                idCard: params.idCard,
                idType: idType
            }
    
            const response = await UpdateCard(data)
            alert(response)
            
        } catch (error:any) {
            alert(error.message)
        }
     
    }
    
    const getTypes = params.typeCard.map((type:TypeCreditCard, key:number)=>{
        return (
            <option onClick={()=>{setIdType(type.id)}} key={type.id}>{type.category}</option>
        )
    })

    

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-72 h-10 my-4 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl">
                Atualizar Cartão
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black text-white border-0">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-center">Solicite um novo cartao de credito!</AlertDialogTitle>
                <AlertDialogDescription>
                    <section className="w-full flex justify-center">
                        <select className="w-96 h-8 text-center text-xl bg-white text-black border-2 border-black rounded-xl">
                            {getTypes}
                        </select>
                    </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={upgradeCard}
                className="bg-gradient-to-r from-fuchsia-600 to-purple-600">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
    
  }