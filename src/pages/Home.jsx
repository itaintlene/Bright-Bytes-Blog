import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container} from '../components'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <Container>
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue text-4xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-blue-400">
                        BrightBytes
                        <span className="text-5xl sm:text-7xl text-gray-800">
                                Illuminate Your Path
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    A clean and functional blog platform built with React, designed to share insights, stories, and knowledge with a vibrant and user-friendly interface.
                    </p>
                    <div className="flex mt-8">
                        
                        <Link to="/signup"
                        className="font-medium uppercase py-2 px-4 rounded-lg bg-blue-400 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
                        >
                            Sign Up
                        </Link>

                        <Link to="/login" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-400 text-blue-400 dark:text-white hover:bg-blue-400 hover:text-white text-md">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto"/>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Home

{/* 
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <Container>
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue uppercase text-4xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        BrightBytes
                        <span className="text-5xl sm:text-7xl">
                                Illuminate Your Path
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Data-driven insights that empower your decisions and drive impactful results. Discover the power of clarity with BrightBytes—where understanding meets innovation.

                    </p>
                    <div className="flex mt-8">
                        
                        <Link to="/signup"
                        className="font-medium uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400"
                        >
                            Sign Up
                        </Link>

                        <Link to="/login" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto"/>
                </div>
            </div>
        </Container>
    </div>


        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    */}