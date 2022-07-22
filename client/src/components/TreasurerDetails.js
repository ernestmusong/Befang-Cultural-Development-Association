import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import { Branches } from '../Data';
import CallNow from './CallNow';

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
    <div className='' style={{height:"100vh", width:"100vw", display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
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
                    <td>{branch.treasurerNumber}</td>
                </tr>
            </tbody>
      </table>	
      <CallNow number={`tel:${branch.treasurerNumber}` }/>
    </div>
  )
}

export default TreasurerDetails