import React, { FC } from "react"
import ProfileCard from "./ProfileCard"
import data, { DefaultData } from "../../pages/UserPage/UserData"
import "./ProfileCard.scss"


interface GridProps {
    list: DefaultData[]
    handleUserData: any
    userToUpdate: any
}


const ProfileCardGrid: FC<GridProps> = ({ list, handleUserData, userToUpdate }) => {

    const handleRemove = (id:number) => {
        handleUserData((prevData:any) => prevData.filter((item: DefaultData) => (item.id !== id)))
        data.splice(id,1)
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