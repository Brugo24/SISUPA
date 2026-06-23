import { PostComProjeto } from "../lib/definitions";
import GaleriaPost from "./galeriaPost";
import Image from "next/image";

export default function PostComponent({post} : {post : PostComProjeto}){

    const postImgs = post?.imagens ? JSON.parse(post.imagens) as string[] : [];
    return(
        <div className="p-3 bg-white rounded-2xl m-2 border-black border-2">
            <div className="flex flex-row">
                <Image
                    className="rounded-full size-max border-2 border-black" 
                    src={post?.projeto.foto || "../public/placeholder_imgs/placeholder.png"}
                    alt= "Foto do Projeto"
                    width={40}
                    height={40}
                />
                <div className="ml-6">
                    <h1 className="font-bold text-2xl">{post?.titulo}</h1>
                    <p className="text-sm">{post?.projeto.nome}</p>
                </div>
            </div>
            <p className="mt-3 mx-2">{post?.corpo}</p>
           <div className="mt-4 w-full px-4">
                <GaleriaPost postImgs={postImgs}/>
           </div>
        </div>
    )
}