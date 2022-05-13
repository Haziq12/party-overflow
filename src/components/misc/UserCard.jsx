import React from 'react'
import '../../styles/UserCard.css'

const UserCard = (props) => {
	console.log('UserCard:', props)
  return (
    <div className="user-card">
      <img alt="user animal avatar"/>
      <div className="user-info">
        <h4> </h4>
      </div>
    </div>
  )
}

export default UserCard