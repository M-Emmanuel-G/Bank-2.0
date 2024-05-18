"use server"

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface DepositProps{
    deposit:{
        id:string,
        value:number
    }
}

export default async function MakeDeposit({deposit}:DepositProps){
 
    await db.accountBank.update({
        data:{
            balance:deposit.value
        },
        where:{
            id:deposit.id
        }
    })

    revalidatePath("/")
}