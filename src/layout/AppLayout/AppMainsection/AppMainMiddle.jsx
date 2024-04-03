import React, { useState, useEffect } from 'react'
import Search from '../../../assets/images/search__image.png'
import './AppMainsection.css'
import Button from '../../../components/AppButton/AppButton'
import InputField from '../../../components/AppInput/AppInput'
import AddNewUser from '../../../pages/AddNewUsers/AddNewUsers'

function AppMainMiddle({ list, dataMem, setIsSearch, searchData }) {
  const [addnew, setAddnew] = useState(false)
  const [input, setInput] = useState("")
  let filteredData = []

  useEffect(() => {
    if (input.length > 0) {
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



  function profileSearch(value) {
    setInput(value);
  }

  return (
    <div>
      <div className="maincontainer__middle">
        <div className="maincontainer__middle__form">
          <img src={Search} className="form__searchimg" />
          <InputField text="text" holder="Search profiles..." name="form__search" inputValue={input} input={(e) => profileSearch(e.target.value)} />
          <Button name="form__button" text="+ Add New" action={() => setAddnew(true)} />
          {addnew && <AddNewUser dataMem={dataMem} action={() => setAddnew(false)} />}
        </div>
      </div>
    </div>
  )
}

export default AppMainMiddle