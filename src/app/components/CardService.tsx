"use client"

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps{
    service:string,
    urlImage:string,
    path:string
}

export default function CardService({service, urlImage, path}:CardProps) {

    const router = useRouter()
    return (
        <Card className="w-20 h-20 bg-white" onClick={(()=>{router.push(path)})}>
            <div className="flex flex-col items-center justify-center ">
                <Image 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    quality={100} 
                    src={urlImage} 
                    alt=""
                    className="w-10 h-10"    
                />
                <span className="text-center text-[10px] my-2">{service}</span>
            </div>
        </Card>
    );
}