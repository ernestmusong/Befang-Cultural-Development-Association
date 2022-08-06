import React, { useState, useEffect } from 'react'
import Title3 from './Title3';
import Title4 from './Title4';
import contributions  from '../db.json';
import {Branches} from '../db.json';
import allProjects from '../db.json'
import ContributeNowLink from './ContributeNowLink';
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
    const [beyoin, setBeyoin] = useState([])
         
    
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

         let beyoin = contributions.contributors.filter(contributor => contributor.branch === "beyoin");
         let beyoinAmts = beyoin.map(person => person.amount)
         let beyoinTotal = beyoinAmts.reduce((sum, item) => {
           return sum + item
         }, 0)
         setBeyoin(beyoinTotal)
          

         let contributors = contributions.contributors;
           setContributors(contributors)
          } , [])
           
      if(contributors.length == 3) return <CommingSoon title="there are no contributions at the moment." />;
  return (
    <>
         <Title3 title=" thank you all for your contributions." />
         <Title4 title="total amount per branch." />
         <div className='table-container all-branch-table'>
         <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution project</div>
         <table className="table table-bordered  ">
			<thead>
                
                <tr style={{backgroundColor:"#DCDCDC"}}>
                  {Branches.map(branch => (
                     <th className=' text-uppercase' scope="col">{branch.name}</th>
                  ))}
                </tr>
			</thead>
            <tbody>
                     <tr className="bg-light">
                     <td className='text-uppercase'>{bamenda} cfa</td>
                     <td className='text-uppercase'>{buea} cfa</td>
                     <td className='text-uppercase'>{muea} cfa</td>
                     <td className='text-uppercase'>{mutengene} cfa</td>
                     <td className='text-uppercase'>{limbe} cfa</td>
                     <td className='text-uppercase'>{douala} cfa</td>
                     <td className='text-uppercase'>{yaounde} cfa</td>
                     <td className='text-uppercase'>{diaspora} cfa</td>
                     <td className='text-uppercase'>{beyoin} cfa</td>
                     <td className='text-uppercase'>--</td>
                 </tr>
                  
            </tbody>
      </table>	
   </div>
      <Title4 title="List of all contributions." />
      <div className='list-of-all-contributions'>
        {/* befang youths initiative branch */}
      <div className='col-md-6 col-lg-4  mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...befang youths initiative branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="beyoin")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
               
            </tbody>
      </table>
      <ContributeNowLink />	
      </div>
        {/* buea branch */}
        <div className='col-md-6 col-lg-4  mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...buea branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="buea")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
               
            </tbody>
      </table>
      <ContributeNowLink />	
      </div>
      {/* bamenda branch */}
      <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...bamenda branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="bamenda")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />	
      </div>
      {/* muea branch */}
      <div className='col-md-6 col-lg-4  mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...muea branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="muea")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />		
      </div>
       {/* mutengene branch */}
       <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...mutengene branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="mutengene")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />		
      </div>
      {/* limbe branch */}
      <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...limbe branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="limbe")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />		
      </div>
      {/* yaounde branch */}
      <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...yaounde branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="yaounde")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />	
      </div>
      {/* douala branch */}
      <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...douala branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="douala")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />	
      </div>
      {/* diaspora branch */}
      <div className='col-md-6 col-lg-4 mx-auto list-per-branch'>
        <div className='text-center text-uppercase py-2'  style={{backgroundColor:"var(--mainOrange)", fontWeight:"bold"}}>Water distribution...diaspora branch</div>
      <table className="table table-bordered">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
			</thead>
            <tbody>
            {contributors.filter(contributor => {
                    return( contributor["water destribution"]===true && contributor.branch==="diaspora")}).map(contributor =>(
                     <tr className="bg-light" key={contributor.id}>
                     <td className='text-capitalize'>{contributor.name}</td>
                     <td className='text-uppercase'>{contributor.amount} cfa</td> 
                 </tr>
                    ))}
            </tbody>
      </table>
      <ContributeNowLink />		
      </div>
        </div>
    </>
  )
}

export default ListOfContributors