import { fetchPosts } from "../lib/data";

export default async function Post(){
    const post = await fetchPosts();
    return(
        <div>
            <p>Título: {post?.titulo}</p>
            <p>Status: {post?.status}</p>
        </div>
    )
}