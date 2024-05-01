import React, { useState, useEffect, FC } from "react"
import Search from "../../assets/images/search__image.png"
import "./MainSection.scss"
import { Button } from "../../components/AppButton/AppButton"
import { InputField } from "../../components/AppInput/AppInput"
import { DefaultData } from "./UserData"
import { useNavigate } from "react-router-dom"

interface FilterProps {

  list: DefaultData[]
  searchData: any
  setIsSearch: (value: boolean) => void
  handleUserData: any

}

const AppFilters: FC<FilterProps> = ({ list, searchData, setIsSearch, handleUserData }) => {

  const [input, setInput] = useState<string>("")
  const navigate = useNavigate()

  const profileSearch = (value: string) => {
    setInput(value);
  }

  let filteredData: DefaultData[]
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



  const handleSort = (value: string) => {

    let sortedData = [...list]
    if (value === "ascending") {
      sortedData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    }

    if (value === "descending") {
      sortedData.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1))
    }

    handleUserData(sortedData)
  }

  return (
    <>
      <div className="maincontainerMiddle">
        <div className="maincontainerMiddlePart">
          <img src={Search} className="searchImg" />
          <InputField text="text" holder="Search for profiles..." name="searchInput" inputValue={input} input={(e) => profileSearch(e.target.value)} />
          <Button name="formButton" text="+Add New" action={() => navigate("/user/addUser")}/>
          <select className="inputSort" onChange={(e) => handleSort(e.target.value)}>
            <option value="" >↑↓ Sort By</option>
            <option value="ascending">↑ Ascending</option>
            <option value="descending">↓ Descending</option>
          </select>
        </div>
      </div>
    </>
  )
}


export default AppFilters
