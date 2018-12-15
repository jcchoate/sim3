import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

export default function dasboard(props) {
    // console.log(props.location.pathname)
    // console.log(props)
    // console.log(props.location)
    console.log(props.match.params.loggedin)
    let user = JSON.parse(props.match.params.loggedin)
    console.log(user)
    let email = user.email


    return (
        
      <div className="dashboard">
        {/* {JSON.stringify(props.match.params.loggedin)} */}

        <div className="sidebar">
            <img className="profilepic" src="https://3bonlp1aiidtbao4s10xacvn-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/boston.jpg"/>
            <p>Welcome {email}</p>
            <Link to="/">
                <img className="house" src="https://www.clipartsfree.net/vector/medium/36451-gray-home-icon-images.png"/>
            </Link>
            <Link to="/">
                <img className="power" src="https://www.clipartsfree.net/vector/large/61506-power-button-clipart.png"/>
            </Link>
        </div>
      </div>
    )
  }
