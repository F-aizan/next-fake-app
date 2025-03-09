'use client'
import { useEffect, useState } from "react";

interface Post {
    albumId: number,
    title: string;
    id: number;
    url: string,
    brand: string,
    thumbnail: string,
    description: string,
    availabilityStatus: string,
    body: string,
    price: number
  }
  
  interface productType {
    posts: Post[];
  }
  
  let PostCard = () => {
    const [posts, setPosts] = useState([])

  useEffect(() => {

    const fetchPosts = async() => {
  
      const response = await fetch('https://dummyjson.com/posts')
  
      if (response.ok) {
        const data = await response.json()
        let reducedposts = data.posts.slice(1, 32)
        console.log(reducedposts)
        setPosts(reducedposts)
      }
    }


    fetchPosts()
  }, [])
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-4 sm:grid-cols-1 space-x-2 space-y-3">
        {posts.map((post:any, index) => (
          <div className="aspect-auto p-8 hover:bg-blue-200 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none" key={index}>
              {/* <img src={post.thumbnail} alt={post.brand} /> */}
              <a href="#" className="text-lg font-medium text-gray-700 dark:text-white">{post.title}</a>
              <p className="tracking-near text-sm">{post.body}</p>
              {/* <p className="font-semibold">Status: {post.availabilityStatus}</p> */}
              {/* <p className="font-semibold">Price: {post.price}</p> */}

          </div>
        ))}
      </div>
    );
  }
  
  export default PostCard;
  