import { Post } from "../types/interfaces";
import { Link } from "react-router-dom";

export default function Card({ post }: { post: Post }) {
    return (
        <div className="card w-100 mb-4">
            <img src={post.imageUrl} alt={post.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text mb-1">Data utworzenia: {post.creationDate}</p>
                <p className="card-text mb-1">Samochód: - </p>
                <p className="card-text mb-3">{post.shortDescription}</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary">
                    Zobacz więcej
                </Link>
            </div>
        </div>
    );
}
