import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Header() {

    const session = await getServerSession(authOptions)

 return (
    <header className="w-full h-[10%] flex items-center justify-between">
        <div className="flex w-full h-full justify-center">
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col mx-2">
                <span className="text-sm text-white">Olá, {session?.user?.first_name}</span>
                <span className="text-[8px] text-white ">Bem vindo de volta</span>
            </div>
        </div>
    </header>
 );
}