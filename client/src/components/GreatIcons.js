import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
  import greatIcons from '../db.json'
//  import { allProjects } from '../Data';

const GreatIcons =()=>{
   
  const [members, setMembers] = useState([])
  useEffect(() =>{
    let members = greatIcons.greatIcons;
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
const Member=({profession, name, img, id}) => {
    return (
      <div className='becuda-member'>
      <div className='becuda-image-wrapper'>
       <img src={require('../iconsImages/'+img)} alt="project" />
      </div> 
     
      <div className='py-2 pl-2' style={{width:"100%", color:"Var(--mainOrange)", backgroundColor: "Var(--darkBlue)", fontWeight:"bolder"}}>
      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{name}</h4>      
      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{profession}</p>
      <Link to={`/icons/${id}`} style={{color:"Var(--heroWhite)"}}>See his works</Link> 
      </div>
   </div>
    )
}

 

 
export default GreatIcons