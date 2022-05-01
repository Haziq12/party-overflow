import React, { useState } from 'react'
import { createPost } from '../../services/postService'
import { useNavigate } from 'react-router'

import '../../styles/Create.css'

// Components
import Header from '../../components/misc/Header'
import PostForm from './PostForm'

const CreatePost = (props) => {

  const navigate = useNavigate()
  const [toggleCode, setToggleCode] = useState(false)
  const [question, setQuestion] = useState('')
  const [codeblock, setCodeblock] = useState('')

  const formData = {
    question: question, 
    codeblock: codeblock, 
    added_by: props.user.profile 
  }

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
      <Header title="Create Post" />
      <PostForm
        codeblock={codeblock}
        setCodeblock={setCodeblock}
        toggleCode={toggleCode}
        setToggleCode={setToggleCode}
        question={question}
        setQuestion={setQuestion}
        handleCreatePost={handleCreatePost}
      />
    </div>
  );
}

export default CreatePost