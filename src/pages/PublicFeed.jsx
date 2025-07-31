import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import service from '../appwrite/config';
import { Query } from 'appwrite';

function Publicfeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts([
            Query.equal("status", "active"),
            Query.orderDesc("$createdAt"),  // show latest first
        ])
        .then((res) => {
            if (res) setPosts(res.documents);
        })
        .catch((err) => {
            console.error("Error fetching public posts:", err);
            
        });
    }, []);


    return (
        <div className="pt-20 sm:pt-24 py-12 min-h-[80vh] ">
            <Container>
                <h2 className="text-3xl font-bold text-center py-20 mb-6">Public Feed</h2>
                <div className="flex flex-wrap -mx-2">
                    {posts.map((post) => (
                        <div key={post.$id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Publicfeed;