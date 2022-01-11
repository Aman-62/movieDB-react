import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oops! It's a dead end</h1>
      <Link to='/'>Back Home</Link>
    </div>
  )
}

export default Error
