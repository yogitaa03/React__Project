import React ,{useState} from 'react'
import Button from '../AppButton/AppButton'
import AddNewUser from '../../pages/AddNewUsers/AddNewUsers'
import './ProfileCards.css'

function ProfileCards(props) {

  const [update, setUpdate] = useState(false)


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
    <div className='grid__element' key={props.gridData.id}>
      <img src={props.gridData.Img_URL} className="grid__element__img" />
      <p className="grid__element__name" >{props.gridData.name}</p>
      <p className="grid__element__country">{props.gridData.country}</p>
      <div className="grid__element__rating" >
        {generateStar(props.gridData.rating)}
      </div>
      <div className="grid__element__button">
        <Button name="grid__button" text="Update" action={() => setUpdate(true)} />
        {update && <AddNewUser userToUpdate={props.gridData} dataMem={dataMem} action={() => setUpdate(false)} />}
        <Button name="grid__button" text="Remove" action={() => props.handleRemove(props.gridData.id)} />
      </div>
    </div>
  </>
  )
}


export default ProfileCards