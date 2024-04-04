 import React from "react"
 import data from "../layout/AppLayout/AppMainsection/AppMainBottom"

 function AddNewMembers(props) {

    let add = { Img_URL: props.url, name: props.name, country: props.country, rating: props.ratings }
    data.push(add)
   return (
     <>
     </>
   )
 }
 
 export default AddNewMembers