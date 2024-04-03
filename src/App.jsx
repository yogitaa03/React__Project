import React, { useState } from 'react'
import Header from './layout/AppLayout/AppHeader/AppHeader'
import AppMainHeader from './layout/AppLayout/AppMainsection/AppMainHeader'
import AppMainMiddle from './layout/AppLayout/AppMainsection/AppMainMiddle'
import ProfileCards_grid from './components/ProfileCards/ProfileCards_grid'
import './App.css';
import data from './layout/AppLayout/AppMainsection/AppMainBottom'
function App() {

  const [list, setList] = useState(data);
  const [search, setSearch] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  function dataSet(value) {
    
    setList(value)

  }

  function searchData(value)
  {
    setSearch(value)
  }

  return (
    <>
      <Header />
      <AppMainHeader />
      <AppMainMiddle list={list} searchData={searchData} setIsSearch={setIsSearch}  dataMem={dataSet} />
      <ProfileCards_grid list={isSearch ? search : list} dataMem={dataSet} />
    </>
  )
}

export default App
