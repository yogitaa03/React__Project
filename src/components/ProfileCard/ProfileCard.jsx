import React ,{useState} from 'react'
import { Button } from '../AppButton/AppButton'
import AddUser from '../../pages/AddUser/AddUser'
import './ProfileCard.css'

function ProfileCard(props) {

  const {handleUserData} = props
  const {gridData} = props
  const {handleRemove} = props

  const [isUpdate, setIsUpdate] = useState(false)

    function generateStar(rate) {
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
        {isUpdate && <AddUser userToUpdate={gridData} handleUserData={handleUserData} isUpdateOpen={() => setIsUpdate(false)} />}
        <Button name="btn" text="Remove" action={() => handleRemove(gridData.id)} />
      </div>
    </div>
  </>
  )
}


export default ProfileCard