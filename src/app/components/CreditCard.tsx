import { Card } from "@/components/ui/card";
import Image from "next/image";
import ImgIcon from "../assets/LogoIcon.png"
import ImgContactless from "../assets/contactless.png"
import ImgChip from "../assets/chip.png"

interface CardProps{
    nameCard:string
    numberCard:number
    codSeg:number
    validateCard:string
    categoryCard:string
}

export default function CardCredit(params:CardProps) {
 return (
    <Card className="w-80 h-40 bg-gradient-to-r from-fuchsia-600 to-purple-600 border-none my-2 ">
    <div className=" w-full h-1/2 flex">
        <div className="w-1/2 h-full flex items-start justify-start">
            <Image
                src={ImgIcon}
                alt="Logo Imagem"
                width={40}
                height={40}
                className="m-2 rounded-sm"
            />
        </div>
        <div className="w-1/2 h-full flex flex-col items-end">
            <Image
                src={ImgContactless}
                alt="Logo Contactless"
                width={30}
                height={30}
                className="m-2 rounded-sm"
            />
             <Image
                src={ImgChip}
                alt="Logo Chip"
                width={30}
                height={30}
                className="m-2 rounded-sm"
            />
        </div>
    </div>
    <div className=" h-1/2 flex flex-col items-center justify-end p-2 text-white">
        <span className="">{params.numberCard}</span>
        <span className="text-[12px] my-1 ">{params.validateCard}</span>
        <span>{params.nameCard}</span>
    </div>
</Card>
 );
}