import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "../lib/utils";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";

export default function Pagination({totalPages} : {totalPages : number}){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    function createPageURL(pageNumber: number | string){
        const params = new URLSearchParams();
        params.set('page',pageNumber.toString());
        return(`${pathname}?${params.toString()}`)
    }

    const allPages = generatePagination(currentPage, totalPages)

    function PageNumber({
        page,
        href,
        isActive,
        isPage
    } : {
        page : number | string,
        href : string
        isActive : boolean
        isPage : boolean
    }){
        return isPage ? (<Link href={href} className={clsx('rounded-full',{'bg-blue-400' : isActive == true})}>{page}</Link>):
        (<div className="rounded-full">{page}</div>)
    }

    function PageArrow({
        href,
        direction
    } : {
        href : string,
        direction : 'left' | 'right'
    }){
        const icon = direction == 'left' ? (<ArrowLeftIcon className="w-4"/>) 
        : (<ArrowRightIcon className="w-4"/>)

        return(
            <Link href={href} className="rounded-full">{icon}</Link>
        )
    }

    return(
        <div>
            {allPages.map((page) => {
                return(
                    <PageNumber 
                    page={page}
                    href={createPageURL(page)}
                    isActive={currentPage == page}
                    isPage={page !== '...'}
                    />
                )
            })}
        </div>
    )
}