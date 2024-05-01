import React, { FC } from "react"
import { Button } from "../AppButton/AppButton"
import "./ProfileCard.scss"
import { DefaultData } from "../../pages/UserPage/UserData"
import { useNavigate } from "react-router-dom"

interface ProfileCardProps {

    gridData: DefaultData
    handleUserData?: any
    handleRemove?: any
    userToUpdate?: any

}

const ProfileCard: FC<ProfileCardProps> = (props) => {

    const { handleRemove } = props
    const { handleUserData } = props
    const { gridData } = props
    const { userToUpdate } = props
    const navigate = useNavigate()

    function generateStar(rate: number) {
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

    const handleUpdate = () => {
        userToUpdate(gridData)
        handleUserData(handleUserData)
        navigate(`/user/updateUser/${gridData.id}`)
    }


    return (
        <>
            <div className="element" key={gridData.id}>
                <img src={gridData.Img_URL} className="ElementImg" />
                <p className="ElementName" >{gridData.name.toLowerCase()}</p>
                <p className="ElementCountry">{gridData.country}</p>
                <div className="ElementRating" >
                    {generateStar(gridData.rating)}
                </div>
                <div className="ElementButton">
                    <Button name="btn" text="Update" action={handleUpdate} />
                    <Button name="btn" text="Remove" action={() => handleRemove(gridData.id)} />
                </div>
            </div>
        </>
    )

}


export default ProfileCard