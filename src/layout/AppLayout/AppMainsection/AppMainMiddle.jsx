import React, { useState } from 'react'
import Search from '../../../assets/images/search__image.png'
import './AppMainsection.css'
import Button from '../../../components/AppButton/AppButton'
import InputField from '../../../components/AppInput/AppInput'
import AddNewUser from '../../../pages/AddNewUsers/AddNewUsers'

function AppMainMiddle({list, dataMem, setIsSearch ,searchData }) {
  const [addnew, setAddnew] = useState(false)
  const [input, setInput] = useState("")
  let filteredData = []

  function profileSearch(value) {
    setInput(value)
    if(value.length > 0)
    {
      filteredData = list.filter((users) => {
        return users.name.toLowerCase().includes(value.toLowerCase())
      })
    searchData(filteredData)
    setIsSearch(true)
    }

    else{
      searchData([])
      setIsSearch(false)
    }
    console.log(filteredData)

  }

  return (
    <div>
      <div className="maincontainer__middle">
        <div className="maincontainer__middle__form">
          <img src={Search} className="form__searchimg" />
          <InputField text="text" holder="Search profiles..." name="form__search" value={input} input={(e) => profileSearch(e.target.value)} />
          <Button name="form__button" text="+ Add New" action={() => setAddnew(true)} />
          {addnew && <AddNewUser list={list} dataMem={dataMem} action={() => setAddnew(false)} />}
        </div>
      </div>
    </div>
  )
}

export default AppMainMiddle