//Inserir a logo!!!!!

import Link from "next/link";
import NavLinks from "./nav-links";
import { redirect } from "next/dist/server/api-utils";

export default function SideNav(){
    return(
        <div className="flex h-full flex-col py-4 border-gray-500 border-r">
            <p>logo!</p>
            <div className="flex grow flex-col justify-between ">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <p>Voltar</p>
            </div>
        </div>

    )
}

