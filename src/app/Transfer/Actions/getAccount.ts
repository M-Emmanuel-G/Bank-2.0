"use server"

import { db } from "@/lib/prisma"

export default async function GetAccount(codAccount:string) {
    const client = await db.accountBank.findUnique({
       include:{
            client:true
        },
        where:{
            cod_account:codAccount
        }
    })

    return client?.client.user_name
}