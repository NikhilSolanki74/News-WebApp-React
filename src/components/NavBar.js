import React from 'react'
import{
  Link
} from "react-router-dom";
const NavBar=()=>{
 
    return (
      <div>
         <nav className="fixed-top navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className=" navbar-brand text-white" to="/general"><strong>GO News</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <Link active className="nav-link text-warning" aria-current="page" to="/general" >Home</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/business">Business</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/entertainment">Entertainment</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/health">Health</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/science">Science</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/sports">Sports</Link>
          <Link className="nav-link text-warning" aria-current="page" to="/technology">Technology</Link>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  
}
 
export default NavBar