import ImgConfig from "../assets/Config.png"
import ImgCard from "../assets/Card.png"
import ImgHome from "../assets/Home.png"
import Link from "next/link";
import Image from "next/image";
import { CreditCard, HomeIcon, User } from "lucide-react";

export default function NavBar() {
    return (
        <div className=" w-[387px] h-[45px] flex justify-evenly items-center bg-gray-800 rounded-3xl">
                <Link href="/Home">
                   <HomeIcon
                    width={20}
                    height={20}
                   />
                </Link>
                <Link href="Cards">
                    <CreditCard
                        width={20}
                        height={20}
                    />
                </Link>
                <Link href="/Profile">
                   <User
                    width={20}
                    height={20}
                   />
                </Link>
        </div>
    );
}