import React, { useState, useEffect } from 'react'
  import becudaExe from '../db.json'

const BecudaExe =()=>{
   
  const [members, setMembers] = useState([])
  useEffect(() =>{
    let members = becudaExe.becudaExecutive;
    setMembers(members)
  }, [])
  return(
    <div>
    <table className="table table-bordered">
<thead style={{backgroundColor:"#DCDCDC"}}>
         <tr>
             <th scope="col">Name</th>
             <th scope="col">position</th>
         </tr>
</thead>
     <tbody>
     {members.map(member =>(
              <tr className="bg-light" key={member.id}>
              <td className='text-uppercase'>{member.name}</td>
              <td className='text-uppercase'>{member.position}</td>  
          </tr>
             ))}
        
     </tbody>
</table>	
</div>
       
  )
}
 

 

 
export default BecudaExe