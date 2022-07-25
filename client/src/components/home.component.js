import React, { Component } from "react";
import banner from "../banner-image.jpeg";
import UserService from "../services/user.service";
import { Link } from "react-router-dom";
import {Branches} from '../Data';
import CountUp from 'react-countup';
import Chief from "./ChiefProfile";
import BecudaExe from "./becudaExe";
import Title from "./Title";
import GreatIcons from "./GreatIcons";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <>
      <div className="banner mx-auto" style={{ backgroundImage: `url(${banner})` }}>
        <div className="text1-wrapper " style={{margin: "0 auto", marginBottom:"4rem", paddingTop:"4rem" }}>
            <h1 className="text1" >our branches</h1>
        </div>
        <div className="container-in-banner">
        {Branches.map(branch => (
        <Link to={branch.link} style={{ textDecoration: "none" }} key={branch.id}>
               <div className="text-center" style={{ backgroundColor: "var(--darkBlue)", borderRadius: "35px", height:"100px", width: "100px" , padding:"10px", display:"grid", placeItems:"center"}}>
                <div>
                <h6 className=" text-capitalize" style={{color: "var(--mainOrange)"}}>{branch.name}</h6>
               <h1 className="value"><CountUp
          start={0}
          end={branch.value}
          duration={3}
        />    </h1>
               <h6 className=" text-capitalize"  style={{color: "var(--mainOrange)"}}>{branch.text}</h6>
                </div>
           </div>
         </Link>
          ))}
        </div>
      </div>
      <Title title="Our supreme ruler" />
      <Chief />
      <Title title="becuda executive members" />
      <BecudaExe />
      <Title title="Some of Befang great icons" />
      <GreatIcons />
      </>
    );
  }
}
