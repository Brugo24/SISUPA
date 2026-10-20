'use client'
import SelectionProcessCard from "./selectionProcessCard";
import { ProcessWithProject } from "../lib/definitions";
import { FetchInitialSelectionProcesses, FetchSelectionProcesses } from "../lib/data";
import { useEffect, useState } from "react";
import ObserverTarget from "./observer";
import EditSelectionProcessModal from "./editSelectionProcessModal";

export default function ProcessesScroll({query} : {query : string}) {

    const [modal, setModal] = useState<boolean>(false);
    const[processes,setProcesses] = useState<ProcessWithProject[]>([]);
    const[lastId, setLastId] = useState<string>();

    useEffect(() => {
        async function loadInitialProcesses() {
            setProcesses([]);
            setLastId(undefined);

            const initialProcesses = await FetchInitialSelectionProcesses(query);
            setProcesses(initialProcesses);

            if(initialProcesses.length > 0){
                setLastId(initialProcesses[initialProcesses.length - 1].id);
            }
        }

        loadInitialProcesses();
    },[query])

    async function carregarProjetos() {
        if(!lastId) return;
        const newProcesses = await FetchSelectionProcesses(query, lastId);

        if(newProcesses.length > 0){
            setProcesses([...processes,...newProcesses]);
            setLastId(newProcesses[newProcesses.length - 1].id);
        }
    }

    return(
        <div>
            <button onClick={() => setModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 hover:cursor-pointer transition-colors">
                Abrir processo seletivo
            </button>
            <div className="mt-6 flex flex-1 flex-row flex-wrap">
            {processes && processes.map((process,index) => {
                return (<div className="m-2" key={index}>
                    <SelectionProcessCard process={process}/>
                </div>)
            })}
            {modal && (
                <EditSelectionProcessModal
                    setModal={setModal}
                />
            )}
            <ObserverTarget onIntersect={carregarProjetos}/>
        </div>
        </div>
    )
}