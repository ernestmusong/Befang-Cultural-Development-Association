import React, { Component } from 'react'
 

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer-bg py-4">
                 
            
                <div className="row d-flex flex-column justify-content-around align-items-center">
                   <div  >
                      <p className="text-light footer-p">
                        Copyright &copy;   <span id="date">2022</span><span className=" ml-2 mr-2" style={{color:"Var(--mainOrange)"}}>BECUDA</span>All rights reserved.
                        
                     </p>
                  </div>
                    <div>
                       <p  className="footer-p text-center text-capitalize text-light">Created by <span className=" text-uppercase"><a href='https://engineeringec.com/' className=" text-uppercase" style={{color:"Var(--mainOrange)"}}>green engineering and consultancy ltd</a></span> </p>
                   </div>
                   <div>
                       <p  className="footer-p text-center text-b text-muted">Powered By React + Node + mongoDB </p>
                   </div>
       
      </div>
            </div>
        )
    }
}