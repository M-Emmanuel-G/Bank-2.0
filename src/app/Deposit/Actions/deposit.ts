"use server"

import Services from "@/app/Services/Services";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface DepositProps{
    deposit:{
        id:string,
        value:number
    }
}

export default async function MakeDeposit({deposit}:DepositProps){
    try {

        if(isNaN(deposit.value)) throw new Error("Serao aceito somente numeros!");
        

        const client = await db.accountBank.findUnique({
            where:{
                id: deposit.id
            }
        })
     
        await db.accountBank.update({
            data:{
                balance: Number(client?.balance) + Number(deposit.value)
            },
            where:{
                id:deposit.id
            }
        })
    
        await db.extract.create({
            data:{
                date: Services.HourNow(),
                description:"Depósito realizado pelo cliente!",
                account_cod:String(client?.cod_account),
                operation:"Depósito",
                value:deposit.value,
                
            }
        })

        revalidatePath("/Extract")
        
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}

redirect("/Home")