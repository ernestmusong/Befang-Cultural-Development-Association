import React from 'react'
import {useState, useEffect} from 'react'
import { facebookComments} from '../db.json'
import { useHistory } from 'react-router-dom'

function Comments() {
    const[comments, setComments] = useState({
        dataHref: "",
        dataWidth: "",
        dataNumposts: "",
        dataColorScheme: ""
       })
       let history = useHistory() 
       
       useEffect(() =>{
        let comments = facebookComments
         setComments(comments)
         console.log(comments)
       }, [history]) 
       console.log(history)
        console.log(history.location.pathname)
  return (
    <div className='bg-light'>
    <div class="fb-comments" data-href={comments.dataHref} data-width={comments.dataWidth} data-numposts={comments.dataNumposts} data-colorscheme={comments.dataColorScheme}></div>
    </div>
  )
}

export default Comments