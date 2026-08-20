'use client'

import Image from "next/image"
import { useState } from "react"
import ModalDeImagens from "./modalImagens";

export default function BannerModalButton({image, isBanner} : {image: string, isBanner : boolean}){
    const bannerImg = [image]
    const [modalImage, setModalImage] = useState<number|null>();

    function abrirModal(modalImage: number){
        setModalImage(modalImage);
    }

    if(isBanner){
        return(
            <div className="">
                <button className="relative w-full h-40 my-4 overflow-hidden rounded-2xl hover:cursor-pointer group" onClick={() => abrirModal(0)}>
                    <Image 
                    className="object-cover object-[50%_50%] rounded-2xl"
                    src={image}
                    alt="Imagem do Post"
                    fill
                    unoptimized
                    />
                </button>
                {modalImage != null && (
                    <ModalDeImagens
                    modalImage={0}
                    setModalImage={setModalImage}
                    postImgs={bannerImg}
                    />
                )}
            </div>
        )
    }else{
        return(
            <div className="">
                <button className="block w-full h-auto my-4 overflow-hidden rounded-2xl hover:cursor-pointer group" onClick={() => abrirModal(0)}>
                    <Image 
                    className="object-cover object-[50%_50%] rounded-2xl"
                    src={image}
                    alt="Imagem do Post"
                    width={1200}
                    height={0}
                    unoptimized
                    />
                </button>
                {modalImage != null && (
                    <ModalDeImagens
                    modalImage={0}
                    setModalImage={setModalImage}
                    postImgs={bannerImg}
                    />
                )}
            </div>
        )
    }
}