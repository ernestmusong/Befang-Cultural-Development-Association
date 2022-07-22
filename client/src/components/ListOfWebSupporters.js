import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import  webSupporters  from '../db.json';
import CommingSoon from './CommingSoon';

const ListOfSupporters=() => {
    const[supporters, setSupporters] = useState([])
         
    
       useEffect(() =>{
         
         let supporters =webSupporters.webSupporters;
           setSupporters(supporters)
          } , [])
          
      if(supporters.length == 2) return <CommingSoon title="there are no supporters at the moment." />;
  return (
    <div>
         <Title3 title="we thank you all for your enormous support for the continued development and maintenance of this website" />
     <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Branch</th>
                </tr>
			</thead>
            <tbody>
            {supporters.map(supporter =>(
                     <tr className="bg-light" key={supporter.id}>
                     <td>{supporter.name}</td>
                     <td>{supporter.amount}</td>
                     <td>{supporter.branch}</td>
                      
                 </tr>
                    ))}
               
            </tbody>
      </table>	
    </div>
  )
}

export default ListOfSupporters