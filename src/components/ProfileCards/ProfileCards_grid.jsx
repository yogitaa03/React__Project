import React from 'react'
import ProfileCards from './ProfileCards'
import './ProfileCards.css'
function ProfileCards_grid({ list, dataMem }) {


  let handleRemove = (id) => {
    dataMem((prevData) => prevData.filter(item => (item.id !== id)))
  }


  return (
    <div className='grid'>

      {list.map((users) => {

        return (<ProfileCards gridData={users} dataMem={dataMem} handleRemove={handleRemove} />)
      })
      }

    </div>

  )
}

export default ProfileCards_grid