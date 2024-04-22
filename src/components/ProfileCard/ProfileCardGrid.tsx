import React, { FC } from "react"
import ProfileCard from "./ProfileCard"
import { DefaultData } from "../../pages/UserPage/UserData"
import "./ProfileCard.css"


interface GridProps {

    list: DefaultData[]
    handleUserData: any
    userToUpdate: any
}


const ProfileCardGrid: FC<GridProps> = ({ list, handleUserData, userToUpdate }) => {

    const handleRemove = (id:number) => {
        handleUserData((prevData:any) => prevData.filter((item: DefaultData) => (item.id !== id)))
    }

    return (
        <div className="grid">
            {list.map((user) => {

                return (<ProfileCard gridData={user} handleUserData={handleUserData} handleRemove={handleRemove} userToUpdate = {userToUpdate} />)
            })
            }

        </div>
    )
}

export default ProfileCardGrid