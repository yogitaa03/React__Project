import React, { useState, useEffect } from 'react'
import Search from '../../../assets/images/search__image.png'
import './MainSection.css'
import Button from '../../../components/AppButton/AppButton'
import InputField from '../../../components/AppInput/AppInput'
import AddUser from '../../../pages/AddUser/AddUser'

function AppMainMiddle({ list, handleUserData, setIsSearch, searchData }) {

  const [isUser, setIsUser] = useState(false)
  const [input, setInput] = useState("")
  // const [sortType, setSortType] = useState("")


  let filteredData = []
  useEffect(() => {
    if (input.length) {
      filteredData = list.filter((user) =>
        user.name.toLowerCase().includes(input.toLowerCase())
      )
      setIsSearch(true);
      searchData(filteredData);
    }

    else {
      setIsSearch(false);
      searchData([]);
    }
  }, [input, list]);



  const profileSearch = (value) => {
    setInput(value);
  }



  return (
    <>
      <div className="maincontainerMiddle">
        <div className="maincontainerMiddlePart">
          <img src={Search} className="searchImg" />
          <InputField text="text" holder="Search for profiles..." name="searchInput" inputValue={input} input={(e) => profileSearch(e.target.value)} />
          <Button name="formButton" text="+ Add New" action={() => setIsUser(true)} />
          {isUser && <AddUser handleUserData={handleUserData} isAddOpen={() => setIsUser(false)} />}
         
        </div>
      </div>
    </>
  )
}

export default AppMainMiddle