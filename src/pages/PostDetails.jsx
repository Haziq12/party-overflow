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

  const [post, setPost] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)
        setPost(postData)
        setComments(postData.comments)
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