import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default function Unnecessary(props) {
  
    return (
      <div>
        {`Waddup this be numba ${props.match.params.num}`}
        <Link to="/">Back</Link>
      </div>
    )
}
