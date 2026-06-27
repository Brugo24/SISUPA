import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useEffect } from "react";

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
        <div className="fixed flex items-center bg-black/85 inset-0 justify-center p-4" onClick={() => {setModalImage(null)}}>
            {postImgs[modalImage-1] && (
                <button className="absolute left-24 h-10 w-10 rounded-2xl bg-black mr-4 hover:bg-gray-700 hover:cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    imagemAnterior();
                }}>
                    <ChevronLeftIcon className="h-10 w-10 text-white"/>
                </button>
            )}
            <div className="relative w-full max-w-4xl h-full max-h-4xl" onClick={(e) => {e.stopPropagation()}}>
                <Image 
                className="object-contain"
                src={postImgs[modalImage]}
                alt={"aaaa"}
                fill
                unoptimized
                />
            </div>
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