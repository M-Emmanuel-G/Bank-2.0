import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./prisma";
import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
  providers: [
   CredentialsProvider({
    name: "Credentials",
    credentials: {
      cpf: { label: "CPF", type: "text", placeholder: "Digite seu CPF" },
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied

      const user = await db.clients.findUnique({
        where:{
          CPF: credentials?.cpf
        }
      })

      if (user) {
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
   })
  ],

  // pages:{
  //   signIn:"/Login"
  // },
  callbacks: {
    // async redirect() {
    //   return "/Home"
    // },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub as string
        session.user.first_name = token.firstName as string
        session.user.last_name = token.lastName as string
      }
      return session;
    },
     jwt: async ({ user, token }) => {
          if (user) {
            token.uid = user.id;
            token.name = user.last_name
          }
          return token;
        },
      },
      session: {
        strategy: 'jwt',
      },
  secret: "sbicpas[cko9028f2-9c2=cj-0u29-2-bu02h-c2",
};