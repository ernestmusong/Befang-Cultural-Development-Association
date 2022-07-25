import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import {Link } from "react-router-dom";
import { Branches } from '../Data';
import CallNow from './CallNow';
import WhatsAppNow from './WhatsAppNow';

const TreasurerDetails=(props) => {
    const[branch, setBranch] = useState({
        id: 1,
          name: "",
          treasurerName: "",
          treasurerNumber:"",
          treasurerTitle:"",
       });
       const branchId =  props.match.params.branchId;
    
       useEffect(() =>{
         
         let branch =Branches.find(branch => branch.id == branchId)
           setBranch(branch)
          }
         
          , [branch, branchId])
      
  return (
    <div className='treasurer-details'>
         <Title3 title="send your contribution to this person" />
     <table className="table table-bordered mx-auto">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Position</th>
                    <th scope="col">Phone Number</th>
                </tr>
			</thead>
            <tbody>
                <tr className="bg-light" >
                    <td>{branch.treasurerName}</td>
                    <td>{branch.name}</td>
                    <td>{branch.treasurerTitle}</td>
                    <td>+{branch.treasurerNumber}</td>
                </tr>
            </tbody>
      </table>	
      <div className='col-md-8 col-lg-6 mx-auto callnow-container'>
          <CallNow number={`tel:+${branch.treasurerNumber}` }/>
          <WhatsAppNow number={`https://api.whatsapp.com/send?phone=${branch.treasurerNumber}` }/>
     </div>
     <div className='col-md-8 col-lg-6 mx-auto mt-2 treasurer-links'>
          <Link to='/contributors' className="text-white">
                See Contributions
          </Link>
          <Link to='/' className="text-white">
                        Go Back
           </Link>
     </div>
    </div>
  )
}

export default TreasurerDetails