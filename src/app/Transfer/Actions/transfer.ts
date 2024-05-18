"use server"

import { db } from "@/lib/prisma"

interface TransferProps{
    codAccountUser:string
    codAccount:string,
    transfer:string
}

export default async function makeTransfer({codAccount, transfer, codAccountUser}:TransferProps) {

    const client = await db.accountBank.findUnique({
        where:{
            cod_account: codAccount
        }
    })

    const clientTransfer = await db.clients.findUnique({
        include:{
            accountBank:true
        },
        where:{
            id: codAccountUser
        }
    })


    await db.accountBank.update({
        data:{
            balance: Number(clientTransfer?.accountBank[0].balance) - Number(transfer)
        },
        where:{
            cod_account:clientTransfer?.accountBank[0].cod_account
        }
    })

    await db.accountBank.update({
        data:{
            balance: Number(client?.balance) + (Number(transfer))
        },
        where:{
            cod_account:codAccount
        }
    })

    console.log({
        transfer,
        codAccount,
        codAccountUser
    });
    

}