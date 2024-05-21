import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./prisma";

export const authOptions: AuthOptions = {
  providers: [
   CredentialsProvider({
    name: "Credentials",
    credentials: {
      cpf: { label: "CPF", type: "text", placeholder: "Digite seu CPF" },
      password: { label: "password", type: "password", placeholder: "Senha" },
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      try {
       
        const user = await db.clients.findUnique({
          where:{
            CPF: credentials?.cpf
          }
        })

        if(!user) throw new Error("Cliente não encontrado!");
        if(user.password !== credentials?.password) throw new Error("Senha inválida!");
        
        

        if (user) {
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
   })
  ],

  pages:{
    signIn:"/Login"
  },
  callbacks: {
    async redirect() {
      return "/Home"
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub as string
        session.user.first_name = token.firstName as string
        session.user.last_name = token.lastName as string
        session.user.birth_date = token.birthDate as string
        session.user.full_address = token.fullAddress as string
        session.user.phone = token.phone as string
        session.user.cod_postal = token.codPostal as string
        session.user.user_name = token.userName as string
      }
      return session;
    },
    
     jwt: async ({ user, token }) => {
          if (user) {
            token.uid = user.id;
            token.name = user.name
            token.firstName = user.first_name
            token.lastName = user.last_name
            token.birthDate = user.birth_date
            token.fullAddress = user.full_address 
            token.phone = user.phone
            token.codPostal = user.cod_postal
            token.userName = user.user_name
          }
          return token;
        },
      },
  secret: "sbicpas[cko9028f2-9c2=cj-0u29-2-bu02h-c2",
};