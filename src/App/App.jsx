import React from 'react'
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

//Services
import { getUser, logout } from '../services/authService'

//Pages + Components
import Nav from '../components/Nav/Nav'
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import PostList from '../pages/PostList'
import PostDetails from '../pages/PostDetails'
import CreatePost from '../pages/CreatePost/CreatePost'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(getUser())

  const handleSignupOrLogin = async () => {
    const currentUser = getUser()
    setUser(currentUser)
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    navigate('/')
  }

  return (
    <div className="App">

      <Nav user={user} handleLogout={handleLogout}/>

      <Routes>

        <Route path='/' element={<h1>Landing</h1>} />
        <Route path='/signin' element={<SignIn handleSignupOrLogin={handleSignupOrLogin}/>} />
        <Route path='/signup' element={<SignUp handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/posts' element={<PostList user={user}/>} />
        <Route path='/new' element={user ? <CreatePost user={user} /> : <Navigate to='/signin' /> } />
        <Route path='/posts/:id' element={<PostDetails user={user} />} />


      </Routes>
    </div>
  )
}

export default App