import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from "../appwrite/config"
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        if (userData?.$id) {
            service.getPosts([
                Query.equal("status", "active"),
                Query.equal("userid", userData.$id)
            ])
            .then((res) => {
                if (res) setPosts(res.documents)
            })
            .catch((error) => {
                console.error("Error fetching posts:", error)
            })
        }
    }, [userData])

    return (
        <div className="">
            <div className="pt-20 sm:pt-24 flex-grow  w-full py-8">
                <Container>
                    <h2 className='my-20 text-center text-3xl font-bold'>My Posts</h2>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
            
        </div>
    )
}

export default AllPosts