import NavBar from "../components/NavBar";
import DepositComponent from "../components/Deposit/Deposit";
import { db } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Deposit() {

    const session = await getServerSession(authOptions)

   const user = await db.clients.findUnique({
    include:{
        accountBank:true
    },
    where:{
        id:session?.user.id
    }
   })

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-black">
            <section className="w-full h-[90%] flex flex-col items-center">
                <DepositComponent
                    deposit={{
                        id: String(user?.accountBank[0].id),
                        userName:String(user?.user_name)
                    }}
                    
                />
            </section>
            <NavBar/>
        </main>
    );
}