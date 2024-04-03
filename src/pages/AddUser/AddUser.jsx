import React, { useState, useEffect } from 'react'
import InputField from '../../components/AppInput/AppInput'
import Button from '../../components/AppButton/AppButton'
import AddNewImage from '../../assets/images/addnew__image.png'
import WrongImage from '../../assets/images/wrong__image.png'
import './AddUser.css'
// import { data } from '../../layout/AppLayout/AppMainSection/UserData'
import { data } from '../../layout/AppLayout/AppMainsection/UserData'

function AddUser({ isAddOpen, isUpdateOpen ,handleUserData, userToUpdate }) {


  const [imageURL, setImageURL] = useState("")
  const [imageName, setImageName] = useState("")
  const [imageCountry, setImageCountry] = useState("")
  const [imageRatings, setImageRatings] = useState("")

  useEffect(() => {
    if (userToUpdate) {

      setImageURL(userToUpdate.Img_URL);
      setImageName(userToUpdate.name);
      setImageCountry(userToUpdate.country);
      setImageRatings(userToUpdate.rating);
    } 

    else {
      setImageURL('');
      setImageName('');
      setImageCountry('');
      setImageRatings('');
    }
  }, [userToUpdate]);



  const handleSubmit = (e) => {

    e.preventDefault()

    if(userToUpdate)
    {

      let updatedUser = {

        Img_URL: imageURL,
        name: imageName,
        country: imageCountry,
        rating: imageRatings,
        id: userToUpdate.id

      }

      handleUserData((prevData) => prevData.map(user => (user.id === updatedUser.id ? updatedUser : user)))
      isUpdateOpen()
    }

    else
    {

      let newMember = {

        Img_URL: imageURL,
        name: imageName,
        country: imageCountry,
        rating: imageRatings,
        id: data.length 
      }

      handleUserData((prevArr) => [...prevArr, newMember])
      isAddOpen()
      
    }
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="addNewForm__popup" >
        <img src={AddNewImage} className="addNewForm__popup__image" />
        <img src={WrongImage} className="addNewForm__popup__wrong" onClick={isAddOpen} />
        <InputField text='text' holder="Image__URL.." name="addNewForm__popup__entries" inputValue={imageURL} input={(e) => setImageURL(e.target.value)} />
        <InputField text='text' holder="Username" name="addNewForm__popup__entries" inputValue={imageName} input={(e) => setImageName(e.target.value)} />
        <InputField text='text' holder="Country" name="addNewForm__popup__entries" inputValue={imageCountry} input={(e) => setImageCountry(e.target.value)} />
        <InputField text='text' holder="Ratings" name="addNewForm__popup__entries" inputValue={imageRatings} input={(e) => setImageRatings(e.target.value)} />
        <Button name="addNewForm__popup__button" text="Submit" />
      </div>
    </form>
  )
}

export default AddUser