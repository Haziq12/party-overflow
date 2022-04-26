import React from 'react'
import '../../styles/Auth.css'
import { signup } from '../../services/authService'
import React, { useState } from 'react '

// Assets
import cat from '../../assets/avatars/cat.png' 

// Services


const SignUp = (props) => {
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
    })

  return (
    <div className="signup-page">

      <div className='left-container'>

        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
						<h3>Social media for developers</h3>
          </div>
          <form className="register-form">
            Inputs Here
          </form>
        </div>

      </div>

      <div className="right-container">
        Animation Here
      </div>

    </div>
  )
}

export default SignUp