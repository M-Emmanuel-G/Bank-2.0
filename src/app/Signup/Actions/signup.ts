"use server"


import Services from "@/app/Services/Services"
import { db } from "@/lib/prisma"

interface UserProps{
    firstName :string,
    lastName :string,
    birthDate :string,
    fullAddress :string,
    codPostal :string,
    phone :string,
    CPF :string, 
    RG :string, 
    income: number,
    userName:  string
    password: string,
    email:string
}

export default async function MakeSignup(params:UserProps) {
    const res = await db.clients.create({
        data:{
            birth_date:params.birthDate,
            cod_postal:params.codPostal,
            CPF: params.CPF,
            email:params.email,
            first_name:params.firstName,
            last_name:params.lastName,
            full_address:params.fullAddress,
            income:params.income,
            password:params.password,
            phone:params.phone,
            RG:params.RG,
            user_name:params.userName,
        }
    })

    await db.accountBank.create({
        data:{
            client_id: res.id,
            balance:0,
            account_created:Services.DateNow(),
            account_status:"Ativo",
            account_type:"Corrente",
            cod_account:Services.GenerateCodAccount()
        }
    })
}