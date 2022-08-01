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
position:"",
    })
    useEffect(() =>{
      let chiefProfile = chiefInfo.befangChief;
       
      setChiefProfile(chiefProfile)
    }, [])
      if (chiefProfile.chiefImg == "") return null;
    return(
      <div className="container"  >
            <div className='row'>
                           {chiefProfile.map(chief =>(
                                  <div className="col-md-6 chief-container mx-auto">
                                    <h5 className="text-uppercase text-center" style={{ color:"Var(--heroWhite)"}}>{chief.position}</h5> 
                                      <div className='chief-wrapper'>
                                       <img src={require('../chiefs/'+chief.chiefImg)} alt="chief" />
                                      </div> 
                                     
                                      <div className='py-2 ml-2'>
                                      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{chief.chiefName}</h4>      
                                      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{chief.chiefTitle}</p>
                                      </div>
                                   </div>
                                    ))}
            </div>
                                   
      </div>
    )
  }
 
        export default Chief