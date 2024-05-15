import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CardProps{
    service:string,
    urlImage:string
}

export default function CardService({service, urlImage}:CardProps) {
    return (
        <Card>
            <div>
                <Image 
                    width={0} 
                    height={0} 
                    sizes="100vw" 
                    quality={100} 
                    src={urlImage} 
                    alt=""
                    className="w-20 h-20"    
                />
            </div>
            <span className="text-center text-[12px]">{service}</span>
        </Card>
    );
}