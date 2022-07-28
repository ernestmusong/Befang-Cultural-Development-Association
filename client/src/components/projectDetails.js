import React, { useState, useEffect } from 'react'
import allProjects from '../db.json'
 import { Link } from 'react-router-dom';

  
 /**
  *@function ProjectDetails
  **/
const ProjectDetails = (props) => {
    
     const[project, setProject] = useState({
      id: 1,
      url:"",
        img: "",
        title: "",
        amount:"",
        realised:"",
        status:"",
        body: "",
        desc: " "
     });
      
    
     const projectId =  props.match.params.projectId;
    
      useEffect(() =>{
        
        let project =allProjects.projects.find(project => project.id == projectId)
          setProject(project)
         }
        
         , [project, projectId])
         if(project.img == "") return null;

    return ( 
      <div className="container   project-details">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={require('../projectImages/'+ project.img)} alt="project" className="img-fluid" />
        </div>
        {/*project text*/}
        <div className="col-10 my-3 mx-auto  col-md-6  text-capitalize">
          <h2  style={{color:"Var(--heroWhite)"}}>{project.title} </h2>
          {/* <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase"> {company} </span>
          </h4> */}
            <p style={{color:"Var(--softWhite)"}}>{project.body}</p>

            <p style={{color:"Var(--lightRed)"}}>
                <strong className="text-uppercase">
                  Amount: {project.amount} <span>cfa</span>
                </strong>
          </p>
              
                
           
          <p style={{color:"Var(--lightGreen)"}}>
                <strong className="text-uppercase" >
                  Realised: {project.realised} <span>cfa</span>
                </strong>
           </p>

          {/*buttons*/}
          <div>
            <Link to="/all-projects">
              <button className='btns'>back to projects</button>
            </Link>
            {project.status == "open" ?
            <Link to= {project.url}>
              <button className='btns' style={{background:"transparent", color: "var(--mainYellow)"}}>
                 Contribute  
             </button>
            </Link> : 
             <button className='btns' disabled={true}  style={{background:"transparent",  color: "var(--mainYellow)", cursor: "not-allowed"}}>
                 Closed!
            </button>}
          </div>
          <div className='mt-3'><Link to="/contributors" className='text-primary text-capitalize my-4'>see Contributors </Link></div>
            
        </div>
      </div>
    </div>
  );
}
 



 export default ProjectDetails