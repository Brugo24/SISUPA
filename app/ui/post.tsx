import { fetchPosts } from "../lib/data";
import Image from "next/image";

export default async function Post(){
    const post = await fetchPosts();
    return(
        <div className="p-3 bg-blue-500 m-2">
            <Image 
                src={post?.projeto.foto || "../public/placeholder_imgs/placeholder.png"}
                alt= "Foto do Projeto"
                width={80}
                height={80}
            />
            <h1>{post?.titulo}</h1>
            <p>{post?.corpo}</p>
            <p>{post?.projeto.nome}</p>
            <Image
                src={post?.imagens || "../public/placeholder_imgs/placeholder.png"} 
                alt= "Fotos do post"
                width={400}
                height={400}
            />
        </div>
    )
}