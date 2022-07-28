import React, { useState, useEffect } from 'react'
import chiefInfo from '../db.json';


 /**
  *@function Chief
  **/

const Chief =(props)=>{
   
    const [chiefProfile, setChiefProfile] = useState({
      
chiefName:"",
chiefTitle:"",
chiefImg:"",
    })
    useEffect(() =>{
      let chiefProfile = chiefInfo.befangChief;
       
      setChiefProfile(chiefProfile)
    }, [])
      if (chiefProfile.chiefImg == "") return null;
    return(
      <div className="container" style={{display:"grid", placeItems:"center"}} >
                                   
                                  <div className="chief-container">
                                      <div className='chief-wrapper'>
                                       <img src={require('../chiefs/'+chiefProfile.chiefImg)} alt="chief" />
                                      </div> 
                                     
                                      <div className='py-2 ml-2'>
                                      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{chiefProfile.chiefName}</h4>      
                                      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{chiefProfile.chiefTitle}</p>
                                      </div>
                                   </div>
                                  
                            </div>
    )
  }
 
        export default Chief