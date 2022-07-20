import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import contributions  from '../db.json';

const ListOfContributors=() => {
    const [contributors, setContributors] = useState([])
         
    
       useEffect(() =>{
         
         let contributors = contributions.contributors;
           setContributors(contributors)
          } , [])
           
      if(contributors.length == 2) return <Title3 title="there are no contributions at the moment." />;
  return (
    <div>
         <Title3 title="we thank you all for your contributions." />
     <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Project</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Branch</th>
                </tr>
			</thead>
            <tbody>
            {contributors.map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td>{contributor.name}</td>
                     <td>{contributor.project}</td>
                     <td>{contributor.amount}</td>
                     <td>{contributor.branch}</td>
                      
                 </tr>
                    ))}
               
            </tbody>
      </table>	
    </div>
  )
}

export default ListOfContributors