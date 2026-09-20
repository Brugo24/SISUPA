'use server'

import Link from "next/link";
import SelectionProcessesWidgetCard from "./selectionProcessesWidgetCard";
import { fetchSelectionProcessesforWidget } from "../lib/data";
import { ProcessWithProject } from "../lib/definitions";

export default async function ProcessesWidget(){
    const selectionProcesses : ProcessWithProject[] = await fetchSelectionProcessesforWidget();
    return(
        <div className= "rounded-md border border-gray-700 flex flex-col w-full h-fit p-2 mb-6">
            <h1 className="font-bold text-2xl mb-2">Inscrições abertas</h1>
            {selectionProcesses.map((selectionProcess,index) => {
                return(
                    <div className="mb-2">
                        <SelectionProcessesWidgetCard selectionProcess={selectionProcess}/>
                    </div>
                )
            })}
            <Link href="/vagas" className="text-gray-400 hover:underline text-right mt-2 mr-2 hover:cursor-pointer">Ver mais...</Link>
        </div> 
    )
}