import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Post } from "../types/interfaces";
import axios from "axios";

export default function SearchCarPage() {
    const [posts, setPosts] = useState<Array<Post>>([]);

    useEffect(() => {
        axios.get(`/api/Posts`).then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <section className="row">
            <h2 className="mb-4">Przeglądaj posty</h2>
            {posts.map((post) => (
                <div key={post.id} className="col-12">
                    <Card post={post} />
                </div>
            ))}
        </section>
    );
}
