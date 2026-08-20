'use client'
import { useEffect, useState } from "react"
import ObserverTarget from "./observer"
import Image from "next/image"
import { fetchImagensIniciaisPorProjeto, fetchImagensPorProjeto } from "../lib/data"
import { ImagemMedia } from "../lib/definitions"
import ModalDeImagens from "./modalImagens"

export default function MediaScroll({id} : {id : string}){
    const [imagesObj, setImagesObj] = useState<ImagemMedia[]>([]);
    const [LastId, setUltimoId] = useState<string | undefined>(undefined);
    const [modalImage, setModalImage] = useState<number | null>();
    const [postImgs, setPostImgs] = useState<string[]>([]);

    useEffect(() => {
        async function carregarImagensIniciais(){
            const InitialImagesObj = await fetchImagensIniciaisPorProjeto(id);
            setImagesObj(InitialImagesObj);

            if(InitialImagesObj.length > 0){
                setUltimoId(InitialImagesObj[InitialImagesObj.length - 1].id);
            }
        }

        carregarImagensIniciais();
    },[])

    async function carregarImagens() {
        if(!LastId) return;
        const newImagesObj = await fetchImagensPorProjeto(id,LastId);

        if(newImagesObj.length > 0){
            setImagesObj([...imagesObj,...newImagesObj]);
            setUltimoId(newImagesObj[newImagesObj.length - 1].id);
        }
    }

    function abrirModal(id : string, indexImagem : number){
        const postImgsString = imagesObj.find(imagesObj => imagesObj.id === id);
        const Imgs = postImgsString?.imagens ? JSON.parse(postImgsString.imagens) as string[] : [];
        setPostImgs(Imgs);
        console.log(postImgs);
        setModalImage(indexImagem);
    }

    return(
        <div>
            <div className="grid grid-cols-3 gap-2 mt-2">
                {imagesObj.map((imageObj) => {
                    const images = imageObj.imagens ? JSON.parse(imageObj.imagens) as string[] : []
                    return images.map((image, index) => {
                        return(
                            <button className="overflow-hidden aspect-square relative rounded-lg border border-gray-500 hover:cursor-pointer" key={index} onClick={() => abrirModal(imageObj.id,index)}>
                                <Image 
                                className="object-cover"
                                src={image || "https://placehold.co/100x100?text=?"}
                                alt="Imagem do post"
                                fill
                                unoptimized
                                />
                            </button>
                        )
                    })
                })}
                <ObserverTarget onIntersect={carregarImagens}/>
            </div>
            {modalImage != null && (
                <ModalDeImagens 
                modalImage={modalImage}
                setModalImage={setModalImage}
                postImgs={postImgs}
                />
            )}
        </div>
    )
}