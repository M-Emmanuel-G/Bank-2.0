"use client"

import ImgConfig from "../assets/Config.png"
import ImgCard from "../assets/Card.png"
import ImgHome from "../assets/Home.png"
import Link from "next/link";
import Image from "next/image";
import { CreditCard, HomeIcon, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {

    const router = useRouter()

    const logout = ()=>{
        signOut()
        router.push("/")
    }

    return (
        <div className=" w-[387px] h-[45px] flex justify-evenly items-center bg-gray-800 rounded-3xl">
                <Link href="/Home">
                   <HomeIcon
                    width={20}
                    height={20}
                    style={{color:"white"}}
                   />
                </Link>
                <Link href="Cards">
                    <CreditCard
                        width={20}
                        height={20}
                        style={{color:"white"}}
                    />
                </Link>
                <Link href="/Profile">
                   <User
                    width={20}
                    height={20}
                    style={{color:"white"}}
                   />
                </Link>
                <Button className="hover:bg-transparent bg-transparent">
                    <LogOut onClick={logout}/>
                </Button>
        </div>
    );
}