'use client'

import Image from "next/image"
import { useState } from "react"
import ModalDeImagens from "./modalImagens";

export default function BannerModalButton({image} : {image: string}){
    const bannerImg = [image]
    const [modalImage, setModalImage] = useState<number|null>();

    function abrirModal(modalImage: number){
        setModalImage(modalImage);
    }

    return(
        <div className="p-4">
            <button className="hover:cursor-pointer overflow-hidden relative h-48 rounded-2xl w-2/3" onClick={() => abrirModal(0)}>
                <Image 
                className="object-cover object-[50%_80%]"
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
}