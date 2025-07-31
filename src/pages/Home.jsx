import React, { useEffect, useState } from 'react'
import service from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'
import { useNavigate } from "react-router-dom";


function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate();


    useEffect(() => {
        if (userData) {
            service.getPosts([
                Query.equal("userid", userData.$id),
                Query.equal("status", "active"),
            ]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                } else {
                    setPosts([])
                }
            })
        }
    }, [userData])

    if (!userData) {
        return (
            <div className="w-full">
            {/* Section 1 - Video */}
            <section className="relative flex items-center justify-center">
                <video
                src="/vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-xl shadow-xl"
                ></video>
            </section>

            {/* Section 2 - Image 1 */}
            <section className="relative flex items-center justify-center">
                <video
                src="/Vid1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-xl shadow-xl"
                ></video>
            </section>

            {/* Section 3 - Image 2 */}
            <section className="relative flex items-center justify-center">
                <video
                src="/Vid2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-xl shadow-xl"
                ></video>
            </section>

            {/* Section 4 - Title + Image */}
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                src="/Vid_Blank.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl text-white">

                    {/* Left Text */}
                    <div className="text-center sm:text-left mb-6 sm:mb-0 sm:w-1/3">
                    <h2 className="text-6xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
                        START YOUR<br />JOURNEY TODAY
                    </h2>
                    </div>

                    {/* Divider Line */}
                    <div className="hidden sm:block w-px h-32 bg-white opacity-70 sm:mx-6"></div>

                    {/* Right Text + Button with Cool Font */}
                    <div className="text-center sm:text-right sm:w-1/3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-4 tracking-wide">
                        BE PART OF SOMETHING BIGGER...
                    </h2>

                    <button
                        onClick={() => navigate("/signup")}
                        className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-slate-500 hover:text-white transition duration-300 text-sm sm:text-base"
                    >
                        JOIN NOW
                    </button>
                    </div>
                </div>
                </div>
            </section>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-16 text-center bg-gray-50 min-h-[60vh]">
                <Container>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">No Posts Yet</h1>
                    <p className="text-lg text-gray-600">You haven't created any posts. Click "Add Post" to get started!</p>
                </Container>
            </div>
        )
    }

    return (

        <div className=' pt-20 sm:pt-24 w-full py-12 bg-gray-50 min-h-[60vh]'>
            <Container>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center my-20">
                    Your Posts
                </h2>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-6'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home