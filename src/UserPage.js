import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { HashRouter, Route, Switch } from "react-router-dom";
import App from './App'
import { Link } from "react-router-dom";

class UserPage extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      loggedInUser: {},
      facts: {}
    }
  }
 
  async login(){
    let {email,password}= this.state 
    let res = await axios.post('/auth/login', {email,password})
    this.setState({loggedInUser: res.data})
  }
  async signup(){
    let {email, password} = this.state
    let res = await axios.post('/auth/signup', {email, password})
    this.setState({loggedInUser: res.data})
  }
  async logout(){
    await axios.get('/auth/logout')
    this.setState({loggedInUser: {}})
  }
  componentDidMount(){
    axios.get('/facts').then((res) => this.setState({facts:res.data}))
  }
  componentDidUpdate(){
      if(this.state.loggedInUser){
          return <h1>Hello {this.state.loggedInUser}</h1>
      }
  }
  render() {
      let user =JSON.stringify(this.state.loggedInUser)
      console.log(user)
    //   let newTo = {
    //       pathname: "/dashboard/true",
    //       userprop: 
    //   }
    return (
      <div className="UserPage">
      <div className="mainBox">
        <img className="hand" src="https://pre00.deviantart.net/dd32/th/pre/f/2017/329/b/1/mario___luigi_waving_hand_discord_emoji_by_twin_gamer-dbutkpc.png"/>
        <h1>Helo</h1>
        <p>Email: <input onChange={(e) => this.setState({ email: e.target.value })}></input></p>
        <p>Password: <input type="password" onChange={(e) => this.setState({ password: e.target.value })}></input></p>
        <Link to={"/dashboard/"+user} ><button onClick={()=>this.login()}>Login</button></Link>
        <button onClick={()=> this.signup()}>Sign Up</button>
        <button onClick={()=> this.logout()}> Logout</button>
      </div>
        {JSON.stringify(user)}
        <br></br>
        <div className="links">
        <Link to="/unnecessary/1"><button>1st Random Page</button></Link>
        <Link to="/unnecessary/2"><button>2nd Random Page</button></Link>
        <Link to="/unnecessary/3"><button>3rd Random Page</button></Link>
        {JSON.stringify(this.state.facts)}
        </div>
      </div>
    );
  }
}

export default UserPage;
