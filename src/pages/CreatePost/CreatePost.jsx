import React, { useState } from 'react'
import '../../styles/Create.css'

// Components
import Header from '../../components/misc/Header'
import PostForm from './PostForm'

const CreatePost = (props) => {
  return (
    <div className="layout">
      <Header />
      <PostForm />
    </div>
  )
}

export default CreatePost