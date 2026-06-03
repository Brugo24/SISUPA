'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {name:'Página inicial', href: '/inicial'},
    {name:'Projetos', href: '/projetos'},
    {name:'Projetos com vagas', href: '/vagas'},
    {name:'Minhas inscrições', href: '/inscricoes'}
];

export default function NavLinks(){ 
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('flex h-12 items-center justify-center text-sm font-medium hover:bg-sky-100',
                            {'bg-sky-100, text-blue-600': pathname === link.href}
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}