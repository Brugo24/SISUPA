'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ProjectNavBar({id} : {id: string}){
    const pathname = usePathname();
    
    const navlinks = [
        {nome: 'Apresentação', href: `/projetos/${id}/presentation`},
        {nome: 'Publicações', href: `/projetos/${id}/posts`},
        {nome: 'Eventos', href: `/projetos/${id}/events`},
        {nome: 'Mídia', href: `/projetos/${id}/media`},
    ]

    
    return(
        <div className="flex flex-row mt-5">
            {navlinks.map((link) => {
                return(
                    <Link href={link.href} key={link.nome} className={clsx(' text-20px m-2 p-2 rounded-2xl',{'bg-blue-400' : pathname === link.href, 'bg-gray-300' : pathname != link.href})}>{link.nome}</Link>
                )
            })}
        </div>
    )
}