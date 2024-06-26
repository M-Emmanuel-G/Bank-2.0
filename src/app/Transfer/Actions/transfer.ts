"use server"

import Services from "@/app/Services/Services"
import { db } from "@/lib/prisma"
import { redirect } from "next/navigation"

interface TransferProps{
    codAccountUser:string
    codAccount:string,
    transfer:number
}

export default async function makeTransfer({codAccount, transfer, codAccountUser}:TransferProps) {

  try {

      // Cliente para transferir

      const client = await db.accountBank.findUnique({
        include:{
            client:true
        },
        where:{
            cod_account: codAccount
        }
    })

    // Cliente

    const clientTransfer = await db.clients.findUnique({
        include:{
            accountBank:true
        },
        where:{
            id: codAccountUser
        }
    })

    if(client === null) throw new Error("Cliente não encontrado!");
    if(transfer > Number(client?.balance)) throw new Error("Saldo indisponível");
    

    // Atualizacao Cliente

    // await db.accountBank.update({
    //     data:{
    //         balance: Number(clientTransfer?.accountBank[0].balance) - Number(transfer)
    //     },
    //     where:{
    //         cod_account:clientTransfer?.accountBank[0].cod_account
    //     }
    // })


    // // Atualizacao cliente para transferir

    // await db.accountBank.update({
    //     data:{
    //         balance: Number(client?.balance) + Number(transfer)
    //     },
    //     where:{
    //         cod_account:codAccount
    //     }
    // })

    // // Salvar Extrato

    // await db.extract.create({
    //     data:{
    //         date: Services.HourNow(),
    //         description:`Transferência realizada para o cliente ${client?.client.first_name}!`,
    //         account_cod:String(clientTransfer?.accountBank[0].cod_account),
    //         operation:"Transferência",
    //         value:Number(transfer),
            
    //     }
    // })

    
    // redirect("/Home")
    
  } catch (error:any) {
    throw new Error(error.message);
  }
}