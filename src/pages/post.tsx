import { useState, useEffect } from "react";
import { Post, Comment } from "../types/interfaces";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function PostPage() {
    const { slug } = useParams();
    const { state } = useAuth();
    const navigate = useNavigate();

    const [post, setPost] = useState<Post | null>(null);
    const [textComment, setTextComment] = useState<string>("");
    const [comments, setComments] = useState<Array<Comment> | null>(null);
    const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

    const getPost = () => {
        axios.get(`/api/Posts/${slug}`).then((response) => {
            setPost(response.data);
        });
    };

    const deletePost = async (id: number) => {
        try {
            const confirmed = confirm("Czy na pewno chcesz usunąć post?");
            if( confirmed === false ) return;
            
            await axios.delete(`/api/Posts/${id}`);
            toast("Usunięto post", { type: "success" });
            navigate("/");
        } catch (ex: any) {
            const message = "Nie udało się usunąć posta";
            toast(message, { type: "error" });
        }
    }

    const getComments = () => {
        axios.get(`/api/Posts/${slug}/comments`).then((response) => {
            setComments(response.data);
        });

        setComments(comments);
    };

    const addComment = async () => {
        try {
            await axios.post(`/api/Comments`, { postId: slug, userId: state.user?.Id, userComment: textComment });
            toast("Dodałeś komentarz", { type: "success" });

            getComments();
            setTextComment("");
            setIsAddingComment(false);
        } catch (ex: any) {
            const message = "Nie udało się dodać komentarza";
            toast(message, { type: "error" });
        }
    };

    useEffect(() => {
        getPost();
        getComments();
    }, []);

    return (
        <>
            {state.user?.RoleId === 2 && (
                <div className="d-flex justify-content-end mb-2">
                    <button
                        type="button"
                        className="btn btn-danger me-2"
                        onClick={() => post?.id && deletePost(post.id)}
                    >
                        Usuń post
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => post?.id && navigate(`/post/${post.id}/edit`)}
                    >
                        Edytuj post
                    </button>
                </div>
            )}
            {post && (
                <div className="card w-100 mb-5">
                    <img src={post.imageUrl} alt={post.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title || "-"}</h5>
                        <p className="card-text mb-1">Data utworzenia: {post.dateOfCreate}</p>
                        <p className="card-text mb-1">
                            Samochód: {post.car?.brand} {post.car?.model}
                        </p>
                        <p className="card-text">{post.longDescription}</p>
                    </div>
                </div>
            )}
            <h3>Komentarze</h3>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <div className="card mb-3" key={comment.id}>
                        <div className="card-header">Dodał: {comment.user?.email}</div>
                        <div className="card-body">
                            <p className="card-text">{comment.userComment}</p>
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
