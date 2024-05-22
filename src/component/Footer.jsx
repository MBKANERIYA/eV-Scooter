import React from "react"
import { Link } from "react-router-dom";
import { Button } from "./Atoms/commom_components";

function Footer(img){
    return(
        <div className="footer col-10 row mx-auto justify-content-between">
            <div className="col-3">
                <img src={img.img} alt="" />
                <p>Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                
            </div>
            <div className="col-3 text-center">
                <h4 className="mb-4">Contact us</h4>
                <ul className="p-0 list-unstyled">
                    <li>E: info@example.com</li>
                    <li>P: +1 234 567 890</li>
                    <li>A: 123 Fifth Avenue, New York,</li>
                    <li>NY 10160</li>
                </ul>

            </div>
            <div className="col-3 text-center">
                <h4 className="mb-4">Useful links</h4>
                <ul class="p-0 list-unstyled">
                    <li class="">
                    <Link to={"/"} class=" " aria-current="page" href="#">Home</Link>
                    </li>
                    <li class="">
                    <Link to={"/shopall"} class=" " aria-current="page" href="#">Shop All</Link>
                    </li>
                    <li class="">
                    <Link to={"/electricscooter"} class="" href="#">Electric Scooter</Link>
                    </li>
                    <li class=" dropdown">
                    <Link to={"accessories"} class=" " href="#">
                        Accessories
                    </Link>
                    </li>
                    <li class="">
                    <Link to={"/about"} class="" href="#">About</Link>
                    </li>
                    <li class="">
                    <Link to={"/contact"} class="" href="#">Contact</Link>
                    </li>
                </ul>

            </div>
            <div className="col-3">
                <h4 className="mb-4">Sign up for special offers</h4>
                <input type="text" placeholder="Email Address" className="p-2 mb-4"/>
                <Button content="SUBSCRIBE" />

            </div>
        </div>
    )
}

export default Footer;