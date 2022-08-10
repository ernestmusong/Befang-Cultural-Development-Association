import React from 'react'
import {useState, useEffect} from 'react'
import { facebookComments} from '../db.json'
 

function Comments() {
    const[comments, setComments] = useState({
        dataHref: "",
        dataWidth: "",
        dataNumposts: "",
        dataColorScheme: ""
       })
        
       
       useEffect(() =>{
        let comments = facebookComments
         setComments(comments)
         console.log(comments)
       }, []) 
        
  return (
    <div className='bg-light'>
    <div class="fb-comments" data-href={comments.dataHref} data-width={comments.dataWidth} data-numposts={comments.dataNumposts} data-colorscheme={comments.dataColorScheme}></div>
    </div>
  )
}

export default Comments