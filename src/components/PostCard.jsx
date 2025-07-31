import React from "react";
import { Link } from "react-router-dom";

function PostCard({ $id, title, username, $createdAt }) {
    const date = new Date($createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <Link to={`/post/${$id}`} className="block transition-transform duration-200 hover:scale-[1.03]">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Author + Date */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                    <span>By -<span className="font-medium text-gray-700 dark:text-gray-200">{username}</span></span>
                    <span>{date}</span>
                </div>

                {/* Title */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;