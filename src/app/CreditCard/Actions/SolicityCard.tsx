"use server"

import { db } from "@/lib/prisma"

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
                categoryCard:"Black",
                codSeg:770,
                nameCard:`${getClient?.first_name} ${getClient?.last_name}`,
                numberCard:12345678,
                validadeCard:"10/12/2032",
                account_cod:getClient?.accountBank[0].cod_account
            }
        })

        return "Cartao solicitado com sucesso!"

    } catch (error:any) {
        return error.message
    }

}