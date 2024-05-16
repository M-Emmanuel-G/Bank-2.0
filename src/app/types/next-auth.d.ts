import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User{
        id:string
        first_name:string
        last_name:string
    }
  interface Session {
    user: User & {
      id: string
      first_name:string
      last_name:string
    } 
    token:{
        id:string
        first_Name:string
        last_Name:string
    }
  }
}