import { Link } from "react-router-dom";
import React from "react";
import { Button } from "./Atoms/commom_components";


function Navbar(img){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse col-12 justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={"/"} class="nav-link " aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to={"/shopall"} class="nav-link " aria-current="page" href="#">Shop All</Link>
        </li>
        <li class="nav-item">
          <Link to={"/electricscooter"} class="nav-link" href="#">Electric Scooter</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to={"accessories"} class="nav-link " href="#">
            Accessories
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/about"} class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to={"/contact"} class="nav-link" href="#">Contact</Link>
        </li>
      </ul>

      <Link to={"/"}>
          <a class="navbar-brand" href="#">
              <img src={img.img} alt="" />
          </a>
        </Link>

      <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search "/>
        <Button content="search" classs="nav-btn" />
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;