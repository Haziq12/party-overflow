import React, { useState } from 'react'
import { createPost } from '../../services/postService'
import { useNavigate } from 'react-router'

import '../../styles/Create.css'

// Components
import Header from '../../components/misc/Header'
import PostForm from './PostForm'

const CreatePost = (props) => {

  const navigate = useNavigate()
  
  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData) 
      console.log(newPost) 
      navigate('/posts') 
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header />
      <PostForm />
    </div>
  )
}

export default CreatePost