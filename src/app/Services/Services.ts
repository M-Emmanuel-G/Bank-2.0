import { db } from '@/lib/prisma'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import localizedFormat from'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export default abstract  class Services {
   static DateNow = ()=>{
    return dayjs().locale("pt-br").format("L LT")
   }

   static HourNow = ()=>{
    return dayjs().locale("pt-br").format("HH:mm")
   }

   static GenerateCodAccount = ()=>{

    const firstCod = Math.floor(Math.random() * 999999)
    const secondCod = Math.floor(Math.random() * 999)

    const uniqueCod = `${firstCod}-${secondCod}`

    // const verifyCod = await db.accountBank.findUnique({
    //     where:{
    //         cod_account: uniqueCod
    //     }
    // })

    return uniqueCod
 }

   static GenerateNewPassword = ()=>{
      return `${Math.floor(Math.random() * 999999)}`
   }

   static VerifyClient = async (email:string)=>{
      const verify = await db.clients.findUnique({
         where:{
            email
         }
      })

      return verify

   }

   static getAccountCodClient = async (id:string)=>{

     const getClient = await db.clients.findUnique({
      include:{
         accountBank:true
      },

      where:{
         id: id
      }
     })
     return getClient?.accountBank[0].cod_account
   }

   static CardCodSeg = async ()=>{

      const codOne = Math.floor(Math.random() * 9)
      const codTwo = Math.floor(Math.random() * 9)
      const codThree = Math.floor(Math.random() * 9)

      const code = `${codOne}${codTwo}${codThree}`

      return Number(code) as number

   }

}