import Image from "next/image";
import PostScroll from "../ui/post-scroll";

export default function Home() {
  return (
    <main className="flex flex-row p-8">
      <div className=" flex flex-col p-3 w-2/3 h-fit">
          {/*Componente dos posts*/}
          <PostScroll />
      </div>
      <div className=" flex flex-col p-3 ml-3 w-1/3 h-fit">
        {/*Componente vagas novas*/}
        <div className="bg-blue-500 flex flex-col w-full h-full p-2 mb-6">
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
        </div> 
        {/*Componente vagas se encerrando*/}
        <div className="bg-blue-500 flex flex-col w-full h-full p-2 mb-6">
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
        </div> 
      </div>
    </main>
  );
}
