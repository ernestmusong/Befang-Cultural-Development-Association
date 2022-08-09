import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./becuda-logo.png";
import {FaAlignJustify, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProjects from "./components/AllProjects";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Footer from "./components/footer";
import SingleProject from "./components/SingleProject";
import Icon from "./components/Icon";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import BefangYouthsInitiative from "./components/BefangYouthsInitiative";
import CommingSoon from "./components/CommingSoon";
import ContributePage from "./components/ContributePage";
import ContributeDetails from "./components/ContributeDetails";
import BeyoinMember from "./components/BeyoinMember";
import ListOfSupporters from "./components/ListOfWebSupporters";
import ListOfContributors from "./components/ListOfContributors";
import WebCreator from "./components/WebCreator";
import BefangDiaspora from "./components/BefangDiaspora";
import DiasporaMember from "./components/DiasporaMember";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.clearHeight = this.clearHeight.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      height: 0,
      linksHeight: 0,
      overFlow: "hidden",
       
    };
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }
  

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
   
   clearHeight (){
    const height = this.state.height;
    if(height !== 0){this.setState({height:0, overFlow: "hidden"} )}
    }
      
   handleClickMenu() {
    const height = this.state.height;
    if(height === 0){this.setState({height:"auto", overFlow: ""}) }
    
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, height, overFlow } = this.state;
    return (
      <>
            {/*top nav*/}
 <div className="top-nav">
 <Link to='/'>
   <div style={{width: "250px"}}>
      <img src= {logo} alt="logo" className="logo" style={{maxWidth: "100%"}} />
  </div> 
 </Link>
   
  <div className="top-nav-support">
      <Link to="/web-creator" style={{color: "Var(--heroWhite)"}}>
          Support this website here !
      </Link>
      <Link to="/web-supporters" style={{color: "Var(--heroWhite)"}}>
           See List Of Supporters
      </Link>
  </div>

<a href="/" style={{color: "var(--mainOrange)"}}><FaMapMarkerAlt style={{marginRight: "1rem"}} /><span>Cameroon, North West Region, Menchum Division.</span></a>


</div>
{/*end top nav*/}
<nav id="nav">
<div className="nav-center">
<div className="nav-header">
  <div className='mobile-logo-container'>
  <Link to='/' onClick={() => {this.clearHeight()}}>
     <div style={{width: "100px", height: "100%"}} className="logo-div">
      <img src={logo} alt="logo" className="logo" style={{maxWidth: "100%"}}/>
    </div> 
    </Link>
  </div>
  <div className="moble-support">
      <Link to="/web-creator" style={{color: "Var(--heroWhite)"}}>
          Support this website here !
      </Link>
      <Link to="/web-supporters" style={{color: "Var(--heroWhite)"}}>
           See List Of Supporters
      </Link>
  </div>
  {this.state.height === 0 ? (
      <div className="nav-toggle target" onClick={() => {this.handleClickMenu()}}>
      <FaAlignJustify className="target" style={{color:"var(--mainOrange)"}} />
    </div>
  ) : ( <div className=" nav-toggle"onClick={() => {this.clearHeight()}}>
         <FaTimes style={{color:"var(--mainOrange)"}}/>
     </div>)}
  
</div>
<div id='links-container' className="links-container target" style={{ height: height, overflow: overFlow}}>
  <div className="links target"  >
  <Link to="/" className='clear' >
   Home
  </Link>
  <div className="dropdown">
  <Link to="/">branches</Link>
  <div className="dropdown-content" style={{ height: height}}>
         <Link to="/comming-soon" className="clear dropdown-link"  onClick={() => {this.clearHeight()}}>
            bemenda
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             buea
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             muea
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Mutengene
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Limbe
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Douala
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Yaounde
          </Link>
          <Link to="/diaspora" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             diaspora
          </Link>
      </div>
      
  </div>
  <Link to="/all-projects" className='clear'  >
  Projects
  </Link>
  <div className="dropdown">
  <Link to="/" style={{zIndex:"-1"}}>sub groups</Link>
  <div className="dropdown-content" style={{ height: height}}>
         <Link to="/befang-youths-initiative" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            Befang Youths Initiative
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Befang Youths Association
          </Link>
      </div>
      
  </div>
  <Link to="/comming-soon" className='clear'  onClick={() => {this.clearHeight()}}>
   Constitution
  </Link>
  <Link to="/comming-soon" className='clear' onClick={() => {this.clearHeight()}}>
   News
  </Link>
  {showModeratorBoard && (
  
    <Link to={"/mod"}>
      Moderator Board
    </Link>

)}

  {showAdminBoard && (
   
    <Link to={"/admin"}>
      Admin Board
    </Link>
   
)}
{showAdminBoard && (
   
   <Link to={"/users"}>
     users
   </Link>
  
)}

 {currentUser && (
   
    <Link to={"/user"}>
      dashboard
    </Link>
  
)}

{currentUser ? (
  
<div style={{display: "flex", justifyContent: "spaceBetween", width: "10%"}}>
   
    <Link to={"/profile"}>
      {currentUser.username}
    </Link>
   
   
    <a href="/"  onClick={()=>this.logOut()} className="clear ml-2" >
      LogOut
    </a>
   
</div>
) : (
<div className="register-link">
  
    <Link to={"/login"} className="clear nav-link" onClick={() => {this.clearHeight()}} >
      Login
    </Link>
   

   
    <Link to={"/register"} className="clear nav-link" onClick={() => {this.clearHeight()}}>
      Register
    </Link>
   
</div>
)}
    </div>
       
  </div>
</div>
</nav>
<div className='info-wrapper'>
  <p className='info text-uppercase'>
 Welcome to the befang cultural and development association...<span className="text-uppercase">becuda</span>
  </p>
</div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/all-projects" component={AllProjects} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route path="/icons/:iconId" component={Icon} />
            <Route path="/befang-youths-initiative" component={BefangYouthsInitiative} />
            <Route path="/contribute-page" component={ContributePage} />
            <Route path="/contributors" component={ListOfContributors} />
            <Route path="/branches/:branchId" component={ContributeDetails} />
            <Route path="/diaspora" component={BefangDiaspora} />
            <Route path="/diaspora-member/:diasporaId" component={DiasporaMember} />
            <Route path="/beyoin/:memberId" component={BeyoinMember} />
            <Route path="/web-supporters" component={ListOfSupporters} />
            <Route path="/web-creator" component={WebCreator} />
            <Route path="/comming-soon" component={CommingSoon} />
             
          </Switch>
          <Footer />

        { /*<AuthVerify logOut={this.logOut}/> */ }

        </>
    );
  }
}

export default App;
