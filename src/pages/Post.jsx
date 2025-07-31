import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
        if (status) {
            navigate("/");
        }
    });
};

    return post ? (
        <div className="py-36 bg-gray-50">
            <Container>
                <div className="max-w-4xl mx-auto border border-red-500 shadow-xl rounded-xl p-8">
                    {/* Post Title */}
                    <h1 className="text-4xl font-extrabold text-grey-600 mb-4 text-center">
                        {post.title}
                    </h1>

                    {/* Post Content */}
                    <div className="prose max-w-none prose-lg prose-p:leading-relaxed prose-img:rounded-xl mb-8 text-gray-800">
                        {post.content ? parse(post.content) : <p>No content found.</p>}
                    </div>

                    {/* Edit / Delete Buttons */}
                    {isAuthor && (
                        <div className="flex justify-center space-x-4 mt-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="px-6 py-2">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-500"
                                className="px-6 py-2"
                                onClick={deletePost}
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ) : null;
}