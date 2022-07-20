import React, { useState, useEffect } from 'react'
import GreatIcons from '../db.json'
 import { Link } from 'react-router-dom';
 
 /**
  *@function IconDetails
  **/
const IconDetails = (props) => {
     const[icon, setIcon] = useState({
      id: 1,
        img: "",
        profession: "",
        name:"",
        work:"",
         
     });
      
    
     const iconId =  props.match.params.iconId;
    
      useEffect(() =>{
        
        let icon =GreatIcons.greatIcons.find(icon => icon.id == iconId)
          setIcon(icon)
         }
        
         , [icon, iconId])
         if(icon.img == "") return null;

    return ( 
      <div className="container py-5">
       
      {/*info*/}
      <div className="row">
        <div className="col-10 my-3 col-md-6">
          <img src={require('../projectImages/'+ icon.img)} alt="project" className="img-fluid" />
        </div>
         
        <div className="col-10 my-3   col-md-6  text-capitalize">
          <h2 style={{color:"Var(--heroWhite)"}}>Name: {icon.name} </h2>
          <h2 style={{color:"Var(--softWhite)"}}>Profession: {icon.profession} </h2>
          {/* <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase"> {company} </span>
          </h4> */}
            <p className="text-muted lead">{icon.work}</p>
          <div>
            <Link to="/">
              <button className='btns'>Go back</button>
            </Link>
          </div>
           
            
        </div>
      </div>
    </div>
  );
}
 



 export default IconDetails