'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { 
    PresentationChartBarIcon, 
    CalendarDaysIcon, 
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon, 
    HomeIcon 
} from "@heroicons/react/24/outline";

const links = [
    {name:'Página inicial', href: '/inicial', icon: HomeIcon},
    {name:'Projetos', href: '/projetos', icon: PresentationChartBarIcon},
    {name:'Eventos', href: '/eventos', icon: CalendarDaysIcon},
    {name:'Inscrições abertas', href: '/vagas', icon: ClipboardDocumentListIcon},
    {name:'Minhas inscrições', href: '/inscricoes', icon: ClipboardDocumentCheckIcon}
];

export default function NavLinks(){ 
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx('flex h-12 items-center text-base font-medium hover:bg-sky-100 pl-4',
                            {'bg-sky-100, text-blue-600': pathname.includes(link.href)}
                        )}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="ml-2">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}