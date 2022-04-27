import React from 'react'
import { useState, useEffect } from 'react'

// Services
import { getAllPosts } from '../services/postService'

// Components


const PostList = () => {
  const [posts, setPost] = useState([])
  
  useEfect (() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      console.log(postData)
    }
    fetchAllPosts()
  }, [])

  return (
    <div className="layout">
      <h1>Posts!</h1>
    </div>
  )
}

export default PostList