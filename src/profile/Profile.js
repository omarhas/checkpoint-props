/*
Create a project using create-react-app.
Create a profile folder under src.
Create a profile component under /profile.
The profile component gets data (fullName, bio, profession) as props, and gets image as children props, and the function handleName functions as a prop that sends an alert message with the name of the profile user.
Define the default props for Profile component. 
Use PropsType to check props.  
Use inline style.

*/

import React from 'react'
import PropTypes  from "prop-types";
import './Profile.css'

const Profile=({name,children,bio,profession ,data})=>{
    
return (
<div style={ { backgroundColor: 'white',
  width: '400px' ,
margin:'5px auto',
padding: '50px',
border: '1px solid rgba(0, 0, 0, 0.205)'

}}>
  { }
    <p>{children}</p>
    <h1>Fullname :{name}</h1>
    <h1>Bio :{bio}</h1>
    <h1>Profession :{profession}</h1>
    { }
    <button onClick={()=>data(name)}>ClickMe </button>
    </div>
)

Profile.prototype = {
  name:PropTypes.String,
  bio :PropTypes.string.isRequired,
  profession:PropTypes.string,
  data:PropTypes.func,
  children:PropTypes.object
}
}
Profile.defaultProps ={
name:"no",
profession:"no profession"
}
export default Profile