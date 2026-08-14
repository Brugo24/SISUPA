'use client'

import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ModalDeImagens({ modalImage, setModalImage, postImgs }: { 
    modalImage: number; 
    setModalImage: (valor: number | null) => void; 
    postImgs: string[]; 
}){
    useEffect(() => {
        const miniaturaAtiva = document.getElementById("miniatura-ativa");
        
        if (miniaturaAtiva) {
            miniaturaAtiva.scrollIntoView({ 
                behavior: "smooth", 
                block: "center" 
            });
        }
    }, [modalImage]);

    function imagemAnterior(){
        setModalImage(modalImage-1);
    }

    function proxImagem(){
        setModalImage(modalImage+1);
    }

    function selecionaImagem(index : number){
        setModalImage(index);
    }

    const conteudoModal = (
        <div className="fixed flex items-center bg-black/85 inset-0 justify-center p-4 z-20" onClick={() => {setModalImage(null)}}>
            {postImgs[modalImage-1] && (
                <button className="absolute left-24 h-10 w-10 rounded-2xl bg-black mr-4 hover:bg-gray-700 hover:cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    imagemAnterior();
                }}>
                    <ChevronLeftIcon className="h-10 w-10 text-white"/>
                </button>
            )}
            <div className="relative w-full max-w-4xl h-full max-h-4xl" onClick={(e) => {e.stopPropagation()}}>
                <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                centerOnInit
                >
                    <TransformComponent 
                    wrapperStyle={{ width: "100%", height: "100%" }}
                    contentStyle={{ width: "100%", height: "100%", position: "relative" }}
                    >
                        <Image 
                        className="object-contain cursor-grab active:cursor-grabbing"
                        src={postImgs[modalImage]}
                        alt={"aaaa"}
                        fill
                        unoptimized
                        />
                    </TransformComponent>
                </TransformWrapper>
            </div>
            {postImgs.length > 1 && (
                <div className="flex flex-col w-32 max-h-120 gap-2 overflow-y-auto overflow-x-hidden pr-2 [&::-webkit-scrollbar]:hidden">
                    {postImgs.map((img,index) => (
                        <Image className={clsx("h-20 w-full hover:cursor-pointer object-cover ml-2",{"border-4 border-blue-400" : img == postImgs[modalImage]})}
                        key={index}
                        src={img}
                        alt={"aaa"}
                        width={10}
                        height={10}
                        unoptimized
                        onClick={(e) => {
                            e.stopPropagation();
                            selecionaImagem(index);
                        }}
                        id={index === modalImage ? "miniatura-ativa" : undefined}
                        />
                    ))}
                </div>
            )}
            {postImgs[modalImage+1] && (
                <button className="absolute right-24 h-10 w-10 rounded-2xl bg-black ml-4 hover:bg-gray-700 hover:cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    proxImagem();
                }}>
                    <ChevronRightIcon className="h-10 w-10 text-white"/>
                </button>
            )}
        </div>
    );

    return createPortal(conteudoModal,document.body);
}