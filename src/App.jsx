import React, { useState } from 'react'
import Header from './layout/AppLayout/AppHeader/AppHeader'
import MainHeader from './layout/AppLayout/AppMainsection/AppMainHeader';
import AppMainMiddle from './layout/AppLayout/AppMainsection/AppMainMiddle';
import ProfileCardGrid from './components/ProfileCard/ProfileCardGrid'
import './App.css';
import { data } from './layout/AppLayout/AppMainsection/UserData'
function App() {

  const [list, setList] = useState(data);
  const [search, setSearch] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  const userData = (value) => {

    setList(value)

  }

  const searchData = (value) => {

    setSearch(value)

  }

  return (
    <>
      <Header />
      <MainHeader/>
      <AppMainMiddle list={list} searchData={searchData} setIsSearch={setIsSearch} handleUserData={userData}/>
      <ProfileCardGrid list={isSearch ? search : list} handleUserData={userData} />
    </>
  )
}

export default App
