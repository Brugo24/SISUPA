import { PostComProjeto } from "../lib/definitions";
import Image from "next/image";

export default function PostComponent({post} : {post : PostComProjeto}){

    const postImgs = post?.imagens ? post.imagens.split(',') : [];
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
           <div>
                {postImgs.map((imagem, index) => {
                    return(
                        <Image
                            key={index}
                            src={imagem}
                            alt = "Imagem do post"
                            width={200}
                            height={200} 
                        />
                    )
                })}
           </div>
        </div>
    )
}