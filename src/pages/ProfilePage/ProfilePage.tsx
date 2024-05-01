import React, { FC, useContext, useEffect, useState } from 'react'
import "./ProfilePage.scss"
import { InputField } from '../../components/AppInput/AppInput'
import { AuthContext } from '../../routes/Auth'
import { Button } from '../../components/AppButton/AppButton'
import { useNavigate } from 'react-router-dom'
import data from '../UserPage/UserData'

const ProfilePage: FC = () => {
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  // const { loginUserName, loginUserPassword, loginUserCountry, handleLoginUser, loginUserRating, loginUserId, loginUserImg } = useContext(AuthContext)
  const { loginUserData, handleLoginUser} = useContext(AuthContext)

  const [authenticatedUserName, setAuthenticatedUserName] = useState<string>("")
  const [authenticatedUserImg, setAuthenticatedUserImg] = useState<string>("")
  const [authenticatedUserPassword, setAuthenticatedUserPassword] = useState<string>("")
  const [authenticatedUserCountry, setAuthenticatedUserCountry] = useState<string>("")
  const [authenticatedUserRating, setAuthenticatedUserRating] = useState<number>(0)
  const [authenticatedUserId, setAuthenticatedUserId] = useState<number>(0)


  useEffect(() => {

    setAuthenticatedUserName(loginUserData.name)
    setAuthenticatedUserPassword(loginUserData.password)
    setAuthenticatedUserCountry(loginUserData.country)
    setAuthenticatedUserRating(loginUserData.rating)
    setAuthenticatedUserId(loginUserData.id)
    setAuthenticatedUserImg(loginUserData.Img_URL)

  }, [loginUserData])


  const handleSave = () => {
    // handleLoginUser(authenticatedUserName, authenticatedUserPassword, authenticatedUserCountry, authenticatedUserRating, authenticatedUserId, authenticatedUserImg)

    let editedUser = {
      Img_URL: authenticatedUserImg,
      name: authenticatedUserName,
      country: authenticatedUserCountry,
      rating: authenticatedUserRating,
      id: authenticatedUserId,
      password: authenticatedUserPassword
    }
    handleLoginUser(editedUser)


    let editedUserIndex = data.findIndex((prev: any) => prev.id === editedUser.id)
    data[editedUserIndex] = editedUser
    navigate(-1)
    setIsEdit((prev) => !prev)

  }

  return (
    <div className="profilePage">
      <div className="profilePagePopup">
        <div className="popupHeader">
          <div className="heading">Profile Details</div>
          <div className="img">
            <img src={authenticatedUserImg} alt="" className="userImg" />
            <div className="name">{loginUserData.name.toUpperCase()}</div>
          </div>
        </div>
        <div className="profilePageDetails">
          <div className="details">
            <label className="detailsLabel">Username:</label>
            {isEdit ? <InputField name="detailsInputName" text="text" input={(e) => setAuthenticatedUserName(e.target.value)} /> : <InputField name="detailsInputName" text="text" inputValue={authenticatedUserName.toLowerCase()} />}
          </div>
          <div className="details">
            <label className="detailsLabel">Password:</label>
            {isEdit ? <InputField name="detailsInput" text="text" input={(e) => setAuthenticatedUserPassword(e.target.value)} /> : <InputField name="detailsInput" text="text" inputValue={authenticatedUserPassword} />}
          </div>
          <div className="details">
            <label className="detailsLabel">Country:</label>
            {isEdit ? <InputField name="detailsInput" text="text" input={(e) => setAuthenticatedUserCountry(e.target.value)} /> : <InputField name="detailsInput" text="text" inputValue={authenticatedUserCountry} />}
          </div>
          <div className="details">
            <label className="detailsLabel">Ratings:</label>
            {isEdit ? <InputField name="detailsInput" text="text" input={(e) => setAuthenticatedUserRating(e.target.value)} /> : <InputField name="detailsInput" text="text" inputValue={authenticatedUserRating} />}
          </div>
          {isEdit ? <Button name="profilePageBack" text="Back" action={() => setIsEdit((prev) => !prev)} /> : <Button name="profilePageBack" text="Close" action={() => navigate(-1) } />}
          {isEdit ? <Button name="profilePageEdit" text="Save" action={handleSave} /> : <Button name="profilePageEdit" text="Edit" action={()=> setIsEdit((prev) => !prev)} />}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
