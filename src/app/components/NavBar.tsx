import ImgConfig from "../assets/Config.png"
import ImgCard from "../assets/Card.png"
import ImgHome from "../assets/Home.png"
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className=" w-[387px] h-[45px] flex justify-evenly items-center bg-gray-800 rounded-3xl">
                <Link href="/Home">
                    <Image
                        src={ ImgHome}
                        alt=""
                        className="w-8 h-7"
                    />
                </Link>
                <Link href="Cards">
                    <Image
                        src={ImgCard}
                        alt=""
                        className="w-8 h-7"
                    />
                </Link>
                <Link href="/Profile">
                    <Image
                        src={ImgConfig}
                        alt=""
                        className="w-8 h-7"
                    />
                </Link>
        </div>
    );
}