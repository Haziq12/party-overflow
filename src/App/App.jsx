import React from 'react'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import SignUp from '../pages/Auth/SignUp'
//Services
import { getUser, logout } from '../services/authService'

//Pages + Components

const App = () => {

  return (
    <div className="App">

      <Nav />

      <Routes>

        <Route path='/' element={<h1>Landing</h1>} />
        <Route path='/signin' element={<h1>Signin</h1>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/posts' element={<h1>Posts</h1>} />

      </Routes>
    </div>
  )
}

export default App