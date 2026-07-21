import Image from "next/image";
import PostScroll from "../ui/post-scroll";
import EventsWidget from "../ui/eventsWidget";
import ProcessesWidget from "../ui/processesWidget";

export default function Home() {
  return (
    <main className="flex flex-row p-8">
      <div className=" flex flex-col p-3 w-2/3 h-fit">
          {/*Componente dos posts*/}
          <PostScroll />
      </div>
      <div className=" flex flex-col p-3 ml-3 w-1/3 h-fit">
        {/*Componente vagas novas*/}
        <EventsWidget/>
        {/*Componente vagas se encerrando*/}
        <ProcessesWidget/>
      </div>
    </main>
  );
}
