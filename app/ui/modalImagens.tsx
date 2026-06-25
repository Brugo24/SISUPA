import Image from "next/image";
import { createPortal } from "react-dom";

export default function ModalDeImagens({ modalImage, setModalImage, postImgs }: { 
    modalImage: number; 
    setModalImage: (valor: number | null) => void; 
    postImgs: string[]; 
}){
    const conteudoModal = (
        <div className="fixed items-center bg-black/85 inset-0 flex justify-center p-4" onClick={() => {setModalImage(null)}}>
            <div className="relative w-full max-w-4xl h-full">
                <Image 
                className="object-contain"
                src={postImgs[modalImage]}
                alt={"aaaa"}
                fill
                unoptimized
                />
            </div>
        </div>
    );

    return createPortal(conteudoModal,document.body);
}