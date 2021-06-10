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
import './App.css';
import  Profile from './profile/Profile'
import image from './123.jpg'


function App() {  function btn(name){
  alert(`my name is : ${name} `)
}


  return (
    <div className='project'>
       <Profile name="omar" bio="bio1" profession="webdeveloper" data={btn}><img src={image }/></Profile>
    
    </div>

  );
}

export default App;
