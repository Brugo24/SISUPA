'use client'
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({placeholder} : {placeholder : string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const search = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);

        params.set('pages','1');
        if(term){
            params.set('query',term);
        }else{
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    },300)

    return(
        <div className="w-full h-8 flex border border-gray-500 rounded-md">
            <MagnifyingGlassIcon className="w-6"/>
            <input
            className=" w-full ml-2"
            placeholder={placeholder}
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
                search(e.target.value.trim());
            }}
            />
        </div>
    )
}