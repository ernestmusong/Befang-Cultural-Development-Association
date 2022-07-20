import React, { useState, useEffect } from 'react'
import befangYouthsInitiative from '../db.json'
 import { Link } from 'react-router-dom';
 /**
  *@function BeyoinMemberProfile
  **/
const BeyoinMemberProfile = (props) => {
    console.log(props)
    
     const[member, setMember] = useState({
      id: 1,
        img: "",
        profession: "",
        name:"",
        title:"",
         info:""
     });
      
    
     const memberId =  props.match.params.memberId;
    
      useEffect(() =>{
        
        let member = befangYouthsInitiative.beyoin.find(member => member.id == memberId)
          setMember(member)
         }
        
         , [member, memberId])
          
         if(member.img == "") return null;

    return ( 
      <div className="container py-5">
      <div className="row">
        <div className="col-10 my-3 col-md-6">
          <img src={require('../beyoinImages/'+ member.img)} alt="member" className="img-fluid" />
        </div>
        <div className="col-10 my-3   col-md-6  text-capitalize">
          <h2 style={{color:"Var(--heroWhite)"}}>Name: {member.name} </h2>
          <h2 style={{color:"Var(--softWhite)"}}>Position: {member.title} </h2>
          <h2 style={{color:"Var(--softWhite)"}}>Profession: {member.profession ==""? "Undefined!" : member.profession} </h2>
            <p className="text-muted lead">{member.info ==""? `Please Mr ${member.name} send some info about you to 676308067` : member.info}</p>
          <div>
            <Link to="/social-groups/beyoin">
              <button className='btns'>Go back</button>
            </Link>
          </div>
           
            
        </div>
      </div>
    </div>
  );
}
 



 export default BeyoinMemberProfile