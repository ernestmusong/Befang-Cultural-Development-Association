import React from 'react'
import Title3 from './Title3';
import {Link } from "react-router-dom";
import CallNow from './CallNow';
import WhatsAppNow from './WhatsAppNow';
export default function WebCreator() {
  return (
    <div className='web-creator'>
         <Title3 title="thank you for your interest in supporting this website" />
         <p style={{color:"Var(--softWhite)", textAlign:"center"}}>Please send your support to this person !</p>
     <table className="table table-bordered mx-auto">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Phone Number</th>
                </tr>
			</thead>
            <tbody>
                <tr className="bg-light" >
                    <td>Musong Ernest</td>
                    <td>Limbe</td>
                    <td>Software Developer</td>
                    <td>+237 676308067</td>
                </tr>
            </tbody>
      </table>
      <Title3 title="bank details" />
      <table className="table table-bordered mx-auto">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">BANK CODE</th>
                    <th scope="col">SWIFT CODE</th>
                    <th scope="col">ACCOUNT NUMBER</th>
                    <th scope="col">KEY RIB</th>
                    <th scope="col">IBAN</th>
                </tr>
			</thead>
            <tbody>
                <tr className="bg-light" >
                    <td>10033</td>
                    <td>UNAFCMCX</td>
                    <td>16068002224</td>
                    <td>46</td>
                    <td>CM21 10033 05216 16068002224 46</td>
                </tr>
            </tbody>
      </table>	
      <div className='col-md-8 col-lg-6 mx-auto callnow-container'>
          <CallNow number={`tel:+237676308067` }/>
          <WhatsAppNow number={`https://api.whatsapp.com/send?phone=237676308067` }/>
     </div>
     <div className='col-md-8 col-lg-6 mx-auto mt-2 mb-3 treasurer-links'>
          <Link to='/web-supporters' className="text-white">
                See supporters
          </Link>
          
          <Link to='/' className="text-white">
                        Go Back
           </Link>
     </div>
    </div>
  )
}
