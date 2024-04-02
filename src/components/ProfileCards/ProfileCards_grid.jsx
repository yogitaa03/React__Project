import React, {useState, useEffect } from 'react'
import ProfileCards from './ProfileCards'
import './ProfileCards.css'
function ProfileCards_grid({ list, dataMem }) {

  useEffect(() => {
    console.log('Total Number of Profiles', list.length);
    return () => {
      console.log("A User Profile is removed")
    }
  }, [list]);

  let handleRemove =(id) =>
  {
    dataMem(list.filter((item) => item.id !== id))
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