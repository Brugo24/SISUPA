//Inserir a logo!!!!!

import Link from "next/link";
import NavLinks from "./nav-links";
import { redirect } from "next/dist/server/api-utils";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SideNav(){
    return(
        <div className="flex h-full flex-col py-4 border-gray-500 border-r">
            <div className="flex grow flex-col justify-between">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <div className="flex h-12 items-center text-base font-medium hover:bg-sky-100 pl-4">
                    <ArrowLeftStartOnRectangleIcon  className="w-6"/>
                    <p className="ml-2">Voltar</p>
                </div>
            </div>
        </div>

    )
}

