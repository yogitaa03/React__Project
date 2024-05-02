import React, { FC, useState } from 'react'
import data from '../pages/UserPage/UserData'
import LoginForm from '../pages/LoginUser/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import UserPage from '../pages/UserPage/UserPage'
import Layout from '../layout/AppLayout/UserpageLayout'
import AddUser from '../pages/AddUser/AddUser'
import AppLayout from '../layout/AppLayout/AppLayout'
import PrivateRoute from './PrivateRoute'
import ProfilePage from '../pages/ProfilePage/ProfilePage'

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
            <Route element={<AppLayout />}>
                <Route path="userlogin" element={<LoginForm />} />
                <Route index element={<Navigate to="userlogin" replace />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/user" element={<UserPage list={list} searchData={searchData} setIsSearch={setIsSearch} handleUserData={userData} userToUpdate={userToUpdate} isSearch={isSearch} search={search} />} />
                        <Route path="/user/addUser" element={<AddUser handleUserData={userData} />} />
                        <Route path="/user/updateUser/:type" element={<AddUser handleUserData={userData} userToUpdate={isUpdate && update} setIsUpdate={setIsUpdate} />} />
                        <Route path="/userprofile" element={<ProfilePage />} />
                    </Route>
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>

    )
}

export default AppRoutes