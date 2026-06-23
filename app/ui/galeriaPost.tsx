import Image from "next/image";

export default function GaleriaPost({postImgs} : {postImgs : string[]}){
    const qtd = postImgs.length;

    if(qtd == 1){
        return (
            <div>
                <Image 
                className="w-full h-80 rounded-2xl object-cover"
                src={postImgs[0]}
                alt="Imagem do Post"
                width={100}
                height={100}
                unoptimized
                />
            </div>
        )
    }
    if(qtd == 2){
        return(
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl gap-0.5 border border-gray-200 h-80">
                <div className="relative w-full h-full">
                    <Image 
                    className="object-cover"
                    src={postImgs[0]}
                    alt="Imagem 1 do Post"
                    fill
                    unoptimized
                    />
                </div>
                <div className="relative w-full h-full">
                    <Image 
                    className="object-cover"
                    src={postImgs[1]}
                    alt="Imagem 2 do Post"
                    fill
                    unoptimized
                    />
                </div>
            </div>
        )
    }
    if(qtd == 3){
        return (
            <div className="grid grid-cols-2 grid-rows-2 overflow-hidden rounded-2xl gap-0.5 border border-gray-200 h-80">
                <div className="row-span-2 h-full w-full relative">
                    <Image
                    className="object-cover"
                    src={postImgs[0]}
                    alt="Imagem 1 do Post"
                    unoptimized
                    fill
                    />
                </div>
                <div className="w-full h-full relative">
                    <Image
                    className="object-cover"
                    src={postImgs[1]}
                    alt="Imagem 2 do Post"
                    unoptimized
                    fill
                    />
                </div>
                <div className="w-full h-full relative">
                    <Image
                    className="object-cover"
                    src={postImgs[2]}
                    alt="Imagem 3 do Post"
                    unoptimized
                    fill
                    />
                </div>
            </div>
        )
    }
    if(qtd == 4){
        return(
            <div className="grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-2xl border border-gray-200 h-80">
                <div className="relative h-full w-full">
                    <Image
                    className="object-cover"
                    src={postImgs[0]}
                    alt="Imagem 1 do Post"
                    unoptimized
                    fill
                    />
                </div>
                <div className="relative h-full w-full">
                    <Image
                    className="object-cover"
                    src={postImgs[1]}
                    alt="Imagem 2 do Post"
                    unoptimized
                    fill
                    />
                </div>
                <div className="relative h-full w-full">
                    <Image
                    className="object-cover"
                    src={postImgs[2]}
                    alt="Imagem 3 do Post"
                    unoptimized
                    fill
                    />
                </div>
                <div className="relative h-full w-full">
                    <Image
                    className="object-cover"
                    src={postImgs[3]}
                    alt="Imagem 4 do Post"
                    unoptimized
                    fill
                    />
                </div>
            </div>
        )
    }
}