import React from 'react'
import { Link } from 'react-router-dom';
  import {projects} from '../db.json'
import Comments from './facebookComments';


const AllProjects =()=>{
  return(
    <>
    <div className="posts-container">
      {projects.map(project => (
        <Project key={project.id} {...project}/>
      ))}
 </div>
 <Comments />
 </>
  )
}
const Project=({id, title, desc,img}) => {
    return (
        <div className="post-container">
         
        <img className="image" src={require('../projectImages/'+img)} alt="project" />
        <h4 className="heading text-capitalize">{title}</h4> 
        <p>{desc}</p>
        <div>      
          <Link to={`/projects/${id}`}>Read more</Link>
        </div>
      </div>
        
        
    )
}

 

 
export default AllProjects