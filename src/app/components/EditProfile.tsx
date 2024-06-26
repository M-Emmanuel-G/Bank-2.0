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
        password:string
    }
}
  
export default function EditProfile({client}:ClientProps) {

    const [uName, setUName]  = useState<string>(client.userName)
    const [newPass, setNewPass ] = useState<string>("")
    const [oldPass, setOldPass ] = useState<string>("")

    const update = async ()=>{

        try {
            if(!uName) throw new Error("Digite um novo nome de usuario");
            if(uName.length < 5 || uName.length > 15) throw new Error("Nome de usuário deve obter de 5 a 15 caractéres");
            if(oldPass !== client.password) throw new Error("Senha antiga está incorreta!");
            
            
            const profile = {
                id: client.id,
                userName: uName,
                password:newPass
            }

            await UpdateProfile({profile})

            alert("Usuário editado com sucesso!")

            setNewPass("")
            setOldPass("")

        } catch (error:any) {
            alert(error.message)
        }

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="my-2">Editar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-purple-600 border-0 border-transparent">Editar Perfil</AlertDialogTitle>
                <AlertDialogDescription className="w-full flex flex-col">
                    <div className="flex flex-col items-center">
                        <strong>Nome de usuario:</strong>
                        <input
                            className="w-72 h-12 border-b-2 border-purple-600 text-sm outline-none bg-transparent"
                            value={uName}
                            onChange={(ev)=>{setUName(ev.target.value)}}
                            placeholder="Nome de usuário..."
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <strong>Senha antiga...</strong>
                        <input
                            className="w-72 h-12 border-b-2 text-sm outline-none bg-transparent border-purple-600"
                            value={oldPass}
                            onChange={(ev)=>{setOldPass(ev.target.value)}}
                            placeholder="Senha antiga..."
                            type="password"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <strong>Nova senha...</strong>
                        <input
                            className="w-72 h-12 border-b-2 border-purple-600 text-sm outline-none bg-transparent t"
                            value={newPass}
                            onChange={(ev)=>{setNewPass(ev.target.value)}}
                            placeholder="Nova Senha..."
                            type="password"
                        />
                    </div>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-transparent border-none hover:bg-transparent">
                    <Button  className="hover:bg-transparent w-72 h-10 my-2 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 ">Cancelar</Button>
                </AlertDialogCancel>
                <AlertDialogAction className="bg-transparent hover:bg-transparent">
                    <Button onClick={update} className="hover:bg-transparent w-72 h-10 my-2 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 ">Confirmar </Button>
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}