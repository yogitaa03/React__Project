import React, {FC} from "react";
import MainHeader from "./AppMainHeader";
import AppFilters from "./AppFilters";
import { DefaultData } from "./UserData";
import ProfileCardGrid from "../../components/ProfileCard/ProfileCardGrid";

interface UserPageProp
{
    list: DefaultData[]
    searchData: any
    setIsSearch: (value: boolean) => void
    handleUserData: any
    userToUpdate: any
    isSearch: any
    search: any

}

const UserPage: FC<UserPageProp> = ({list, searchData, setIsSearch, handleUserData, userToUpdate, isSearch, search}) =>
    {

        return(
            <div>
            <MainHeader/>
            <AppFilters list={list} searchData={searchData} setIsSearch={setIsSearch} handleUserData={handleUserData} />
            <ProfileCardGrid list={isSearch ? search : list} handleUserData={handleUserData} userToUpdate={userToUpdate} />
            </div>

        )
    }


export default UserPage    