import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
  import allProjects from '../db.json'
//  import { allProjects } from '../Data';

const AllProjects =()=>{
   
  const [projects, setProjects] = useState([])
  useEffect(() =>{
    let projects = allProjects.projects;
    setProjects(projects)
  }, [])
  return(
    <div className="posts-container">
      {projects.map(project => (
        <Project key={project.id} {...project}/>
      ))}
 </div>
  )
}
const Project=({id, title, desc,img}) => {
    return (
        <div className="post-container">
         
        <img className="image" src={require('../projectImages/'+img)} alt="project" />
        <h1 className="heading text-capitalize">{title}</h1> 
        <p>{desc}</p>
        <div>      
          <Link to={`/projects/${id}`}>Read more</Link>
        </div>
      </div>
        
        
    )
}

 

 
export default AllProjects