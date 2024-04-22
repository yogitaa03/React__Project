import React, { FC, useState, useEffect } from "react";
import { Button } from "../../components/AppButton/AppButton";
import { InputField } from "../../components/AppInput/AppInput";
import { useNavigate } from "react-router-dom";
import { DefaultData } from "../UserPage/UserData";
import "./AddUser.css"
import data from "../UserPage/UserData";
interface AddUserProp {

  handleUserData: any
  userToUpdate?: any
  setIsUpdate?: ((value: boolean) => void) | any
}

const AddUser: FC<AddUserProp> = ({ userToUpdate, handleUserData, setIsUpdate }) => {

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [ratings, setRatings] = useState("")
  const [formName, setFormName] = useState("Create New Card")
  const [btnName, setBtnName] = useState("Create")
  const navigate = useNavigate()

  useEffect(() => {
    if (userToUpdate) {

      setImage(userToUpdate.Img_URL);
      setName(userToUpdate.name);
      setCountry(userToUpdate.country);
      setRatings(userToUpdate.rating);
      setBtnName("Update")
      setFormName("Update User Card")
    }

    else {
      setImage("");
      setName("");
      setCountry("");
      setRatings("");
    }
  }, [userToUpdate]);


  const handleSubmit = (e: any) => {

    e.preventDefault()

    if (userToUpdate) {

      let updatedUser = {

        Img_URL: image,
        name: name,
        country: country,
        rating: ratings,
        id: userToUpdate.id

      }

      handleUserData((prevData: any) => prevData.map((user: DefaultData) => (user.id === updatedUser.id ? updatedUser : user)))
      setIsUpdate(false);

    }

    else {

      let newMember = {

        Img_URL: image,
        name: name,
        country: country,
        rating: ratings,
        id: data.length
      }

      handleUserData((prevArr: any) => [...prevArr, newMember])

    }

    navigate(-1)

  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formPopup">
      <div className="formHeading">
          <i className="fa fa-solid fa-chevron-left arrow" onClick={()=> {navigate(-1); setIsUpdate(false)}}></i>
          <div className="formName">{formName}</div>
        </div>
        <div className="formArea">
        <div className="formInput">
          <label htmlFor="imgPath" className="formInputLabel">Enter user image path</label>
          <InputField text="text" name="formInputEntries" inputValue={image} input={(e) => setImage(e.target.value)} />
        </div>
        <div className="formInput">
          <label htmlFor="Name" className="formInputLabel">Enter user name</label>
          <InputField text="text" name="formInputEntries" inputValue={name} input={(e) => setName(e.target.value)} />
        </div>
        <div className="formInput">
          <label htmlFor="Country" className="formInputLabel">Enter user country</label>
          <InputField text="text" name="formInputEntries" inputValue={country} input={(e) => setCountry(e.target.value)} />
        </div>
        <div className="formInput">
          <label htmlFor="userRating" className="formInputLabel">Enter user ratings</label>
          <InputField text="text" name="formInputEntries" inputValue={ratings} input={(e) => setRatings(e.target.value)} />
        </div>
        </div>
        <Button name="formInputButton" text={btnName} />
      </div>
    </form>
  )
}

export default AddUser
