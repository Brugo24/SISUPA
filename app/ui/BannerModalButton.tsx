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