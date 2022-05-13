import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import * as postService from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import Header from '../components/misc/Header'

const PostDetails = (props) => {
  const { id } = useParams() 
	const navigate = useNavigate()
  console.log('Post Details Params:', id)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)
        console.log('Post Details data', postData)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id]) 

  return (
    <div className="layout">
      <Header title="Post Details" />
      <div className="post-details">
				
      </div>
    </div>
  )
}

export default PostDetails