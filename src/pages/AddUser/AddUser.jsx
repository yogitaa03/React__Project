import React, { useState, useEffect } from 'react'
import InputField from '../../components/AppInput/AppInput'
import Button from '../../components/AppButton/AppButton'
import AddNewImage from '../../assets/images/addnew__image.png'
import WrongImage from '../../assets/images/wrong__image.png'
import './AddUser.css'
import { data } from '../../layout/AppLayout/AppMainsection/UserData'

function AddUser({ isAddOpen, isUpdateOpen ,handleUserData, userToUpdate }) {


  const [userImage, setUserImage] = useState("")
  const [userName, setUserName] = useState("")
  const [userCountry, setUserCountry] = useState("")
  const [userRatings, setUserRatings] = useState("")

  useEffect(() => {
    if (userToUpdate) {

      setUserImage(userToUpdate.Img_URL);
      setUserName(userToUpdate.name);
      setUserCountry(userToUpdate.country);
      setUserRatings(userToUpdate.rating);
    } 

    else {
      setUserImage('');
      setUserName('');
      setUserCountry('');
      setUserRatings('');
    }
  }, [userToUpdate]);



  const handleSubmit = (e) => {

    e.preventDefault()

    if(userToUpdate)
    {

      let updatedUser = {

        Img_URL: userImage,
        name: userName,
        country: userCountry,
        rating: userRatings,
        id: userToUpdate.id

      }

      handleUserData((prevData) => prevData.map(user => (user.id === updatedUser.id ? updatedUser : user)))
      isUpdateOpen()
    }

    else
    {

      let newMember = {

        Img_URL: userImage,
        name: userName,
        country: userCountry,
        rating: userRatings,
        id: data.length 
      }

      handleUserData((prevArr) => [...prevArr, newMember])
      isAddOpen()
      
    }
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="formPopup" >
        <img src={AddNewImage} className="formPopupImage" />
        <img src={WrongImage} className="formPopupWrong" onClick={isAddOpen} />
        <InputField text='text' holder="Enter user image path" name="formPopupEntries" inputValue={userImage} input={(e) => setUserImage(e.target.value)} />
        <InputField text='text' holder="Enter user name" name="formPopupEntries" inputValue={userName} input={(e) => setUserName(e.target.value)} />
        <InputField text='text' holder="Enter user country" name="formPopupEntries" inputValue={userCountry} input={(e) => setUserCountry(e.target.value)} />
        <InputField text='text' holder="Enter user ratings" name="formPopupEntries" inputValue={userRatings} input={(e) => setUserRatings(e.target.value)} />
        <Button name="formPopupButton" text="Submit" />
      </div>
    </form>
  )
}

export default AddUser