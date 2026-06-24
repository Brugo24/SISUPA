import Image from "next/image";
import ModalImagens from "./modalImagens";
import { useState } from "react";

export default function GaleriaPost({postImgs} : {postImgs : string[]}){
    const qtd = postImgs.length;
    const [modalImages, setModalImages] = useState<number|null>();

    function abrirModal(){
        
    }

    if(qtd == 1){
        return (
            <button className="hover:cursor-pointer">
                <Image 
                className="w-full h-80 rounded-2xl object-cover"
                src={postImgs[0]}
                alt="Imagem do Post"
                width={100}
                height={100}
                unoptimized
                />
            </button>
        )
    }
    if(qtd == 2){
        return(
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl gap-0.5 border border-gray-200 h-80">
                <button className="relative w-full h-full hover:cursor-pointer">
                    <Image 
                    className="object-cover"
                    src={postImgs[0]}
                    alt="Imagem 1 do Post"
                    fill
                    unoptimized
                    />
                </button>
                <button className="relative w-full h-full hover:cursor-pointer">
                    <Image 
                    className="object-cover"
                    src={postImgs[1]}
                    alt="Imagem 2 do Post"
                    fill
                    unoptimized
                    />
                </button>
            </div>
        )
    }
    if(qtd == 3){
        return (
            <div className="grid grid-cols-2 grid-rows-2 overflow-hidden rounded-2xl gap-0.5 border border-gray-200 h-80">
                <button className="row-span-2 h-full w-full relative hover:cursor-pointer">
                    <Image
                    className="object-cover"
                    src={postImgs[0]}
                    alt="Imagem 1 do Post"
                    unoptimized
                    fill
                    />
                </button>
                <button className="w-full h-full relative hover:cursor-pointer">
                    <Image
                    className="object-cover"
                    src={postImgs[1]}
                    alt="Imagem 2 do Post"
                    unoptimized
                    fill
                    />
                </button>
                <button className="w-full h-full relative hover:cursor-pointer">
                    <Image
                    className="object-cover"
                    src={postImgs[2]}
                    alt="Imagem 3 do Post"
                    unoptimized
                    fill
                    />
                </button>
            </div>
        )
    }
    if(qtd >= 4){
        return(
            <div className="grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-2xl border border-gray-200 h-80">
                {postImgs.slice(0, 4).map((img, index) => 
                    (
                        <button className="relative h-full w-full hover:cursor-pointer" key={index}>
                            <Image
                            className="object-cover"
                            key={index}
                            src={img}
                            alt={`Imagem ${index} do Post`}
                            fill
                            unoptimized
                            />
                            {index == 3 && qtd > 4 && (
                                <button className="absolute inset-0 flex items-center justify-center bg-black/50 text-2xl font-bold text-white hover:cursor-pointer">
                                    +{qtd - 4}
                                </button>
                            )}
                        </button>

                    )
                )}
            </div>
        )
    }
}