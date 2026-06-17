'use client'
import { useState } from "react";
import { PostComProjeto } from "../lib/definitions";
import { fetchPosts, fetchPostsIniciais } from "../lib/data";
import ObserverTarget from "./observer";
import PostComponent from "./post";
import { useEffect } from "react";

export default function PostScroll(){

    const [posts, setPosts] = useState<PostComProjeto[]>([]);
    const [ultimoId, setultimoId] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function carregarPostsIniciais() {
            const postsIniciais = await fetchPostsIniciais();
            setPosts(postsIniciais);

            if(postsIniciais.length > 0){
                setultimoId(postsIniciais[postsIniciais.length - 1].id);
            }
        }

        carregarPostsIniciais();
    },[]);

    async function carregarPosts() {
        if(!ultimoId) return;
        const postsNovos = await fetchPosts(ultimoId);

        if(postsNovos.length > 0){
            setPosts([...posts, ...postsNovos]);
            setultimoId(postsNovos[postsNovos.length - 1].id);
        }
    }

    return(
        <div>
            {posts.map((post) => {
                return(
                    <PostComponent key={post.id} post={post}/>
                )
            })}
            <ObserverTarget onIntersect={carregarPosts}/>
        </div>
    )
}