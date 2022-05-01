import React from 'react'
import { useState, useEffect } from 'react'

// Services
import { getAllPosts, updatePost } from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import Header from '../components/misc/Header'

const PostList = (props) => {
  const [posts, setPosts] = useState([])

  useEffect (() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) } 
  }, [])

  const markPostResolved = async (postId) => {
    try {
      const updatedPost = await updatePost(postId)
			setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header />
      <h1>Posts!</h1>
      {posts?.map((post) => (
        <PostCard post={post} key={post._id} user={props.user} markPostResolved={markPostResolved} />
      ))}
    </div>
  )
}

export default PostList