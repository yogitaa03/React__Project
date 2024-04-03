import React from 'react'
import ProfileCard from './ProfileCard'
import './ProfileCard.css'
function ProfileCardGrid({ list, handleUserData }) {


  let handleRemove = (id) => {
    handleUserData((prevData) => prevData.filter(item => (item.id !== id)))
  }


  return (
    <div className='grid'>

      {list.map((user) => {

        return (<ProfileCard gridData={user} handleUserData={handleUserData} handleRemove={handleRemove} />)
      })
      }

    </div>

  )
}

export default ProfileCardGrid