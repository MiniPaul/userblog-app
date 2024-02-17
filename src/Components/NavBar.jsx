import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NavBar = () => {
  let navigate=useNavigate()

  useEffect(
    ()=>{
      let userID=sessionStorage.getItem("userid")
      if(userID==null || userID==undefined)
      {
        navigate("/")
      }
    }
  )

  const logOutAction=()=>{
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/add">Add Post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mypost">View my post</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/viewall">View all post</a>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={logOutAction}>Logout</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar