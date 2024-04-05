import React, { FC } from "react"
import ProfileCard from "./ProfileCard"
import { DefaultData } from "../../layout/AppLayout/AppMainsection/UserData"
import "./ProfileCard.css"


interface GridProps {

    list: DefaultData[]
    handleUserData: any
}


const ProfileCardGrid: FC<GridProps> = ({ list, handleUserData }) => {

    console.log(list)
    const handleRemove = (id) => {
        handleUserData((prevData) => prevData.filter(item => (item.id !== id)))
    }

    return (
        <div className="grid">

            {list.map((user) => {

                return (<ProfileCard gridData={user} handleUserData={handleUserData} handleRemove={handleRemove} />)
            })
            }

        </div>
    )
}

export default ProfileCardGrid