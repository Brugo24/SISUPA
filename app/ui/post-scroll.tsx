'use client'
import { useState } from "react";
import { PostComProjeto } from "../lib/definitions";
import { fetchPosts, fetchPostsIniciais } from "../lib/data";
import ObserverTarget from "./observer";
import PostComponent from "./post";
import { useEffect } from "react";
import EditPostModal from "./editPostModal";

export default function PostScroll({id} : {id?: string}){

    const [modal, setModal] = useState<boolean>(false);
    const [posts, setPosts] = useState<PostComProjeto[]>([]);
    const [ultimoId, setultimoId] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function carregarPostsIniciais() {
            const postsIniciais = await fetchPostsIniciais(id);
            setPosts(postsIniciais);

            if(postsIniciais.length > 0){
                setultimoId(postsIniciais[postsIniciais.length - 1].id);
            }
        }

        carregarPostsIniciais();
    },[]);

    async function carregarPosts() {
        if(!ultimoId) return;
        const postsNovos = await fetchPosts(ultimoId, id);

        if(postsNovos.length > 0){
            setPosts([...posts, ...postsNovos]);
            setultimoId(postsNovos[postsNovos.length - 1].id);
        }
    }

    return(
        <div>
            <button onClick={() => setModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 hover:cursor-pointer transition-colors">
                Adicionar publicação
            </button>
            {posts.map((post) => {
                return(
                    <PostComponent key={post.id} post={post}/>
                )
            })}
            {modal && (
                <EditPostModal
                    setModal={setModal}
                />
            )}
            <ObserverTarget onIntersect={carregarPosts}/>
        </div>
    )
}