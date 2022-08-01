import React from 'react'
import {Link } from "react-router-dom";
import Title3 from './Title3';
import { Branches } from '../Data';
function ContributePage() {
  return (
    <>
         <Title3 title="select your branch" />
         <div className='contribute-page'>
             {Branches.map(branch => (
                <Link to={`/branches/${branch.id}`} key={branch.id}  className='contribute-page-child bg-light'>
                         {branch.name}
                </Link>
             )

             )}
         </div>
        
    </>
  )
}

export default ContributePage