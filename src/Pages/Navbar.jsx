import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const signOut=()=>{
    localStorage.removeItem("token","Jugnu Prajapati")
  }
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-bg-dark" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item text-bg-dark ">
          <Link to= "./home" className="nav-link active text-bg-dark" aria-current="page" >
            Home
          </Link>
        </li>
        <li className="nav-item text-bg-dark">
          <Link to= "/about" className="nav-link text-bg-dark" >About</Link>
        </li>
        <li className="nav-item text-bg-dark">
          <Link to= "/contact" className="nav-link text-bg-dark" >Contact</Link>
        </li>

        <li className="nav-item text-bg-dark">
          <span className='' style={{position:"absolute", right:"157px", paddingTop:"8px"}}>Welcome to Jugnu prajapati</span>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success text-bg-dark" type="submit" onClick={signOut}>Sign Out</button>
      </form>
    </div>
  </div>
</nav>

    </>
    
  )
}

export default Navbar