import { Link } from "react-router-dom"
import { Button, P } from "./Atoms/commom_components"


function Acc(img){
    return(
        <div className="col-10 mx-auto row acc">
            <div className="col-6 mt-3">
                <h1>Shop Electric Scooter Accessories</h1>
                <P content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <Link to={"/Accessories"}>
                <Button  content="SHOP ACCESSORIES" />
                </Link>
            </div>
            <div className="col-6">
                <img src={img.img} alt="" />
            </div>
        </div>
    )
}

export default Acc