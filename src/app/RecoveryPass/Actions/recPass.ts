"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface RecoveryProps{
    email:string,
    newPass:string
}

export default async function RecPass(params:RecoveryProps) {

    const verify = await db.clients.findUnique({
        where:{
            email:params.email
        }
    })

    if(!verify){
        return null
    }else{
        await db.clients.update({
            where:{
                email:params.email
            },
            data:{
                password:params.newPass
            }
        })

        revalidatePath("/")
    }
}