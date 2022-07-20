import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
  import becudaExe from '../db.json'
//  import { allProjects } from '../Data';

const BecudaExe =()=>{
   
  const [members, setMembers] = useState([])
  useEffect(() =>{
    let members = becudaExe.becudaExecutive;
    setMembers(members)
  }, [members])
  return(
     
      <div className='becuda-executive mx-auto'>
      {members.map(member => (
        <Member key={member.id} {...member}/>
      ))}
      </div>
    
      
 
  )
}
const Member=({ title, name, img}) => {
    return (
      <div className='becuda-member'>
      <div className='becuda-image-wrapper'>
       <img src={require('../projectImages/'+img)} alt="project" />
      </div> 
     
      <div className='py-2 ml-2'>
      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{name}</h4>      
      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{title}</p>
      </div>
   </div>
    )
}

 

 
export default BecudaExe