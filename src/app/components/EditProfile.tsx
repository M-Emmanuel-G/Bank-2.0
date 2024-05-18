"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UpdateProfile from "../Profile/actions/updateProfile";

interface ClientProps{
    client:{
        id:string
        userName:string
    }
}
  
export default function EditProfile({client}:ClientProps) {

    const [uName, setUName]  = useState<string>(client.userName)

    const update = async ()=>{

        try {
            if(!uName) throw new Error("Digite um novo nome de usuario");
            if(uName.length < 5 || uName.length > 15) throw new Error("Nome de usuário deve obter de 5 a 15 caractéres");
        
            const profile = {
                id: client.id,
                userName: uName
            }

            await UpdateProfile({profile})

            alert("Usuário editado com sucesso!")

        } catch (error:any) {
            alert(error.message)
        }

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="my-2">Editar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Editar Perfil</AlertDialogTitle>
                <AlertDialogDescription>
                    <input
                        className="w-96 h-12 border-b-2 border-black text-sm outline-none"
                        value={uName}
                        onChange={(ev)=>{setUName(ev.target.value)}}
                        placeholder="Nome de usuário"
                    />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={update}>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}