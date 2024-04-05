import React, { FC, useState } from "react"
import { Button } from "../AppButton/AppButton"
import "./ProfileCard.css"
import AddUser from "../../pages/AddUser/AddUser"
import { DefaultData } from "../../layout/AppLayout/AppMainsection/UserData"

interface ProfileCardProps {

    gridData: DefaultData
    handleUserData?: any
    handleRemove?: any

}

const ProfileCard: FC<ProfileCardProps> = (props) => {

    const{handleRemove} = props
    const{handleUserData} = props
    const{gridData} = props
    const [isUpdate, setIsUpdate] = useState(false)


    function generateStar(rate:number) {
        let stars = []
        for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                stars.push(<i className="fa fa-solid fa-star"></i>);
            }
            else {
                stars.push(<i className="fa fa-solid fa-star-o"></i>);
            }
        }
        return stars
    }

    return (
        <>
            <div className="element" key={gridData.id}>
                <img src={gridData.Img_URL} className="ElementImg" />
                <p className="ElementName" >{gridData.name}</p>
                <p className="ElementCountry">{gridData.country}</p>
                <div className="ElementRating" >
                    {generateStar(gridData.rating)}
                </div>
                <div className="ElementButton">
                    <Button name="btn" text="Update" action={() => setIsUpdate(true)} />
                    {isUpdate && <AddUser handleUserData={handleUserData} isOpen={() => setIsUpdate(false)} />}
                    <Button name="btn" text="Remove" action={() => handleRemove(gridData.id)} />
                </div>
            </div>
        </>
    )

}


export default ProfileCard