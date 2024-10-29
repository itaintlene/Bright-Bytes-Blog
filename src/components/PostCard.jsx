import React from 'react';
import parse from "html-react-parser";
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom';

function PostCard({$id, title, featuredImage, content}) {

  const previewText = content.split(" ").slice(0, 10).join(" "); // Get the first 20 words

  return (
    
      <div className="max-w-screen-2xl mx-auto px-7 py-20 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16 justify-between">
        <Link to={`/post/${$id}`}>
          <div className="w-full sm:w-32 md:w-56 lg:w-60 gap-2 p-4 flex-grow rounded-xl overflow-hidden shadow-lg bg-white flex flex-col justify-between h-70">
            <div className="relative mb-4 h-40 overflow-hidden">
              <img 
                  src={appwriteService.getFilePreview(featuredImage)} 
                  alt={title} 
                  className="w-full h-full rounded-xl object-cover px-2 py-2" 
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-100 opacity-10"></div>
            </div>

            <div className="px-2 flex flex-col flex-grow">
              <h2 className="font-semibold text-lg line-clamp-1 hover:text-indigo-600 transition duration-500 ease-in-out">
                  {title}
              </h2>
            </div>

            <p className='text-gray-500 px-2 text-sm line-clamp-2 '>
                {parse(typeof content === "string" ? content : "")}
            </p>

          </div>    
        </Link>    
        </div> 
      </div> 
  )
}

export default PostCard