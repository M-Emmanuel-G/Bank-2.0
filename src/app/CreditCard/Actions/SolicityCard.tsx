"use server"

import Services from "@/app/Services/Services"
import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function SolicityCard(idClient:string) {

    try {

        const getClient = await db.clients.findUnique({
            include:{
                accountBank:true,
            },
            where:{
                id: idClient
            }
        })

        const getAccount = await db.accountBank.findUnique({
            include:{
                creditCard:true
            },
            where:{
                cod_account: getClient?.accountBank[0].cod_account
            }
        })

        if(!getClient) return "Cliente nao encontrado!"
        if(getAccount?.creditCard[0]) return "Solicitação cancelada! Você ja possui um cartao!"
        
        await db.creditCard.create({
            data:{
                categoryCard:"clxqfhtnu0000a5hl9f59w88b",
                codSeg:770,
                nameCard:`${getClient?.first_name} ${getClient?.last_name}`,
                numberCard:12345678,
                validadeCard: Services.ValidatCard(),
                account_cod:getClient?.accountBank[0].cod_account
            }
        })

        revalidatePath("/CreditCard")
        return "Cartao solicitado com sucesso!"

    } catch (error:any) {
        return error.message
    }

}