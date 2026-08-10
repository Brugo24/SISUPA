import MediaScroll from "@/app/ui/media-scroll"

export default async function Midia({params} : {params : Promise<{id : string}>}){
    const id = await (await params).id

    return(
        <div>
            <MediaScroll id={id}/>
        </div>
    )
}