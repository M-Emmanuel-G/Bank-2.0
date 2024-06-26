"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface UpdateProps{
    profile:{
        id:string,
        userName:string,
        password:string
    }
}

export default async function UpdateProfile({profile}:UpdateProps) {
    
        await db.clients.update({
            data:{
                user_name:profile.userName,
                password:profile.password
            },
            where:{
                id: profile.id
            }
        })
        
        revalidatePath("/Profile")

}