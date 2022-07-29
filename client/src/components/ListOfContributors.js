import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import contributions  from '../db.json';
import allProjects from '../db.json'
import {Link } from "react-router-dom";
import CommingSoon from './CommingSoon';

const ListOfContributors=() => {
    const [project, setProject] = useState([])
    const [contributors, setContributors] = useState([])
    const [bamenda, setBamenda] = useState([])
    const [douala, setDouala] = useState([])
    const [yaounde, setYaounde] = useState([])
    const [buea, setBuea] = useState([])
    const [muea, setMuea] = useState([])
    const [limbe, setLimbe] = useState([])
    const [mutengene, setMutengene] = useState([])
    const [diaspora, setDiaspora] = useState([])
         
    
       useEffect(() =>{
        let projects = allProjects.projects;
        let projectName = projects.map(project => project.title)
        setProject(projectName)
        let bamenda = contributions.contributors.filter(contributor => contributor.branch === "bamenda");
        let bAmts = bamenda.map(person => person.amount)
        let bamendaTotal = bAmts.reduce((sum, item) => {
          return sum + item
        }, 0)
        setBamenda(bamendaTotal)

        let buea = contributions.contributors.filter(contributor => contributor.branch === "buea");
        let buAmts = buea.map(person => person.amount)
        let bueaTotal = buAmts.reduce((sum, item) => {
          return sum + item
        }, 0)
        setBuea(bueaTotal)

        let muea = contributions.contributors.filter(contributor => contributor.branch === "muea");
        let muAmts = muea.map(person => person.amount)
        let mueaTotal = muAmts.reduce((sum, item) => {
          return sum + item
        }, 0)
        setMuea(mueaTotal)
          
         let mutengene = contributions.contributors.filter(contributor => contributor.branch === "mutengene");
         let mutengAmts = mutengene.map(person => person.amount)
         let mutengTotal = mutengAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setMutengene(mutengTotal)

         let limbe = contributions.contributors.filter(contributor => contributor.branch === "limbe");
         let limbeAmts = limbe.map(person => person.amount)
         let limbeTotal = limbeAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setLimbe(limbeTotal)

         let yaounde = contributions.contributors.filter(contributor => contributor.branch === "yaounde");
         let yaoundeAmts = yaounde.map(person => person.amount)
         let yaoundeTotal = yaoundeAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setYaounde(yaoundeTotal)

         let douala = contributions.contributors.filter(contributor => contributor.branch === "douala");
         let doualaAmts = douala.map(person => person.amount)
         let doualaTotal = doualaAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setDouala(doualaTotal)

         let diaspora = contributions.contributors.filter(contributor => contributor.branch === "diaspora");
         let diasporaAmts = diaspora.map(person => person.amount)
         let diasporaTotal = diasporaAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setDiaspora(diasporaTotal)
          

         let contributors = contributions.contributors;
           setContributors(contributors)
          } , [])
           
      if(contributors.length == 3) return <CommingSoon title="there are no contributions at the moment." />;
  return (
    <>
         <Title3 title="we thank you all for your contributions." />
         <Title3 title="total amount per branch." />
         <div className='table-container all-branch-table'>
         <table className="table table-bordered  ">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th className='text-uppercase' scope="col"> Project name</th>
                    <th className='text-uppercase' scope="col"> bamenda</th>
                    <th className='text-uppercase' scope="col"> buea</th>
                    <th className='text-uppercase' scope="col"> muea</th>
                    <th className='text-uppercase' scope="col"> mutengene</th>
                    <th className='text-uppercase' scope="col"> limbe</th>
                    <th className='text-uppercase' scope="col"> douala</th>
                    <th className='text-uppercase' scope="col"> yaounde</th>
                    <th className='text-uppercase' scope="col"> diaspora</th>
                </tr>
			</thead>
            <tbody>
                     <tr className="bg-light">
                     <td className='text-capitalize'>Water distribution</td>
                     <td>{bamenda} cfa</td>
                     <td>{buea} cfa</td>
                     <td>{muea} cfa</td>
                     <td>{mutengene} cfa</td>
                     <td>{limbe} cfa</td>
                     <td>{douala} cfa</td>
                     <td>{yaounde} cfa</td>
                     <td>{diaspora} cfa</td>
                 </tr>
                  
            </tbody>
      </table>	
   </div>
      <Title3 title="All contributions." />
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
         
     
      <div className='col-md-8 col-lg-6 mx-auto mt-2 mb-3 treasurer-links'>
          <Link to='/contribute-page' className="text-white">
                 Contribute now
          </Link>
          <Link to='/' className="text-white">
                        Go Back
           </Link>
     </div>
    </>
  )
}

export default ListOfContributors