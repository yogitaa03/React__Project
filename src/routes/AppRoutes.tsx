import React, { FC, useState } from 'react'
import data from '../pages/UserPage/UserData'
// import { LoginForm } from '../pages/LoginUser/Login'
import LoginForm from '../pages/LoginUser/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import UserPage from '../pages/UserPage/UserPage'
import Layout from '../layout/AppLayout/Layout'
import AddUser from '../pages/AddUser/AddUser'
const AppRoutes: FC = () => {
    const [list, setList] = useState(data);
    const [search, setSearch] = useState([])
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [isUpdate, setIsUpdate] = useState<boolean>(false)
    const [update, setUpdate] = useState([])

    const userData = (value: any) => {

        setList(value)

    }

    const searchData = (value: any) => {

        setSearch(value)

    }

    const userToUpdate = (value: any) => {

        setUpdate(value)
        setIsUpdate(true)
    }

    return (

        <Routes>
            <Route path="/userlogin" element = {<LoginForm />}/> 
            <Route index element={<Navigate to = "/userlogin"/>}/>
            <Route path="/" element={<Layout />}>
                <Route path="/user" element={<UserPage list={list} searchData={searchData} setIsSearch={setIsSearch} handleUserData={userData} userToUpdate={userToUpdate} isSearch={isSearch} search={search} />} />
                <Route path="/user/addUser" element={<AddUser handleUserData={userData} />} />
                <Route path="/user/updateUser/:type" element={<AddUser handleUserData={userData} userToUpdate={isUpdate && update} setIsUpdate={setIsUpdate} />} />
            </Route>
            <Route path ="*" element={<NotFound/>}/>
        </Routes>

    )
}

export default AppRoutes