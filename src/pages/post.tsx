import { useState, useEffect } from "react";
import { Post, Comment } from "../types/interfaces";
import { useAuth } from "../context/authContext";

export default function PostPage() {
    const { state } = useAuth();

    const [post, setPost] = useState<Post | null>(null);
    const [textComment, setTextComment] = useState<string>("");
    const [comments, setComments] = useState<Array<Comment> | null>(null);
    const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

    const getPost = () => {
        const post: Post = {
            id: 1,
            title: "asdasd",
            creationDate: "2021-06-01T00:00:00",
            shortDescription: "asdasd",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Aliquam Lorem",
            imageUrl: "asdasd",
        };

        setPost(post);
    };

    const getComments = () => {
        const comments: Array<Comment> = [
            {
                id: 1,
                creationDate: "2021-06-01T00:00:00",
                postId: 1,
                text: "komentarz jeden",
                userId: 1,
            },
            {
                id: 2,
                creationDate: "2021-06-01T00:00:00",
                postId: 1,
                text: "komentarz dwa",
                userId: 1,
            },
        ];

        setComments(comments);
    };

    const addComment = () => {
        console.log("add comment");

        // setComments((lastState) => [...lastState, comment]);
        setTextComment("");
        setIsAddingComment(false);
    };

    useEffect(() => {
        getPost();
        getComments();
    }, []);

    return (
        <>
            {post && (
                <div className="card w-100 mb-5">
                    <img src={post.imageUrl} alt={post.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text mb-1">Data utworzenia: {post.creationDate}</p>
                        <p className="card-text mb-1">Samochód: - </p>
                        <p className="card-text">{post.description}</p>
                    </div>
                </div>
            )}
            <h3>Komentarze</h3>
            {comments ? (
                comments.map((comment) => (
                    <div className="card mb-3" key={comment.id}>
                        <div className="card-header">{comment.userId}</div>
                        <div className="card-body">
                            <p className="card-text mb-1">{comment.text}</p>
                            <p className="card-text fs-6 text-secondary">Dodano: {comment.creationDate}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Brak komentarzy</p>
            )}
            {state.isAuthenticated && (
                <>
                    {!isAddingComment ? (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setIsAddingComment((lastState) => !lastState)}
                        >
                            Dodaj komentarz
                        </button>
                    ) : (
                        <>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                    Dodawanie komentarza
                                </label>
                                <textarea
                                    className="form-control"
                                    value={textComment}
                                    id="exampleFormControlTextarea1"
                                    rows={4}
                                    onChange={(e) => setTextComment(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="button" className="btn btn-primary me-2" onClick={addComment}>
                                Zapisz komentarz
                            </button>
                            <button type="button" className="btn btn-light" onClick={() => setIsAddingComment(false)}>
                                Anuluj
                            </button>
                        </>
                    )}
                </>
            )}
        </>
    );
}
