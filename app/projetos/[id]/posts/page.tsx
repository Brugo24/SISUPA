import PostScroll from "@/app/ui/post-scroll"

export default async function ProjectPosts({params} : {params : Promise<{id : string}>}){
    const id = (await params).id

    return(
        <div>
            <PostScroll id={id}/>
        </div>
    )
}