import React, {useState, FC} from "react";
import { Header } from "./layout/AppLayout/AppHeader/AppHeader"
import MainHeader from "./layout/AppLayout/AppMainsection/AppMainHeader";
import AppFilters from "./layout/AppLayout/AppMainsection/AppFilters";
import ProfileCardGrid from "./components/ProfileCard/ProfileCardGrid";
import data from "./layout/AppLayout/AppMainsection/UserData";
import "./App.css"

 const App: FC = () =>{

  const [list, setList] = useState(data);
  const [search, setSearch] = useState([])
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const userData = (value: any) => {

    setList(value)

  }

  const searchData = (value: any) => {

    setSearch(value)

  }

  return(
    <>
    <Header/>
    <MainHeader/>
    <AppFilters list={list} searchData={searchData} setIsSearch={setIsSearch} handleUserData={userData}/>
    <ProfileCardGrid list={isSearch ? search : list} handleUserData={userData} />
    </>

  )
}

 export default App


