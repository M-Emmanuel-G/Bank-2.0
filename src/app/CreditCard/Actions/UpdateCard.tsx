"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface UpdateProps{
    idType: string
    idCard:string
}

export default async function UpdateCard(params:UpdateProps) {
    try {
        const verifyTypeCard = await db.typeCreditCard.findUnique({
            where:{
                id: params.idType
            }
        })

        const getCard = await db.creditCard.findUnique({
            where:{
                id:params.idCard
            }
        })

        if(!params.idType) return "Escolha um novo tipo de cartao!"
        if(!verifyTypeCard) return "Tipo de cartao nao encontrado!"
        if(!getCard) return "Cartao nao encontrado!"
        if(getCard.categoryCard === verifyTypeCard.id) return "Voce ja possui este cartao!"

        await db.creditCard.update({
            data:{
                 categoryCard:params.idType
            },
            where:{
                id:params.idCard
            }
        })

        revalidatePath("/CreditCard")

        return `Parabens... Você agora é o novo cliente do cartao ${verifyTypeCard.category}!`
    } catch (error:any) {
        return error.message
    }
}