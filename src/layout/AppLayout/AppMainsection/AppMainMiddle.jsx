import React, { useState, useEffect } from 'react'
import Search from '../../../assets/images/search__image.png'
import './MainSection.css'
import Button from '../../../components/AppButton/AppButton'
import InputField from '../../../components/AppInput/AppInput'
import AddUser from '../../../pages/AddUser/AddUser'

function AppMainMiddle({ list, handleUserData, setIsSearch, searchData }) {

  const [isUser, setIsUser] = useState(false)
  const [input, setInput] = useState("")

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

  const handleSort =(value) =>
  {
    if(value === "ascending")
    {
      console.log("ascending")
    }

    if(value === "descending")
    {
      console.log("descending")
    }
  }


  return (
    <>
      <div className="maincontainerMiddle">
        <div className="maincontainerMiddlePart">
          <img src={Search} className="searchImg" />
          <InputField text="text" holder="Search for profiles..." name="searchInput" inputValue={input} input={(e) => profileSearch(e.target.value)} />
          <Button name="formButton" text="+ Add New" action={() => setIsUser(true)} />
          {isUser && <AddUser handleUserData={handleUserData} isAddOpen={() => setIsUser(false)} />}
          <select className="inputSort" onChange={(e)=> handleSort(e.target.value)}>
            <option value="">&#xe17e; Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default AppMainMiddle