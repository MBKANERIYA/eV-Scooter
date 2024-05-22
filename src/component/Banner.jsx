import { Button, P } from "./Atoms/commom_components";

function Banner(img){
    return(
        <div className="container Banner">
            <div className="row">
                <div className="col-4 p-0">
                    <h1>Libero X250</h1>
                    <h4 className="mb-5">250 Watt Electric Scooter</h4>
                    <p>Informations:</p>
                    <div className="row info justify-content-around mb-5">
                        <div className="i-1 border border-dark col-3">
                            <h2>30<br/>km</h2>
                            <span>BATTERY</span>
                        </div>
                        <div className="i-2 border border-dark  col-3">
                            <h2>13.5<br/>kg</h2>
                            <span>WEIGHT</span>
                        </div>
                        <div className="i-3 border border-dark  col-3">
                            <h2>25<br/>km/h</h2>
                            <span>SPEED</span>
                        </div>
                        
                    </div>
                    <div className="price pt-5">
                        <span>$750.00</span>
                        <Button content="Add To Cart" classs="banner-btn"/>
                    </div>
                    
                </div>
                <div className="col-5 d-flex justify-content-center">
                    <img className=" b-img" src={img.img} alt="" />
                </div>
                <div className="col-3 pl-4">
                    <h3 className="pt-5">Description</h3>
                    <P content="The Fully Loaded Libero x250 is a High Performance, Extremely Durable, High Speed, Lightweight Electric Scooter with a Huge Battery"/>
                    <p className="mt-4">Share:</p>
                </div>
            </div>
        </div>
    )
}

export default Banner;