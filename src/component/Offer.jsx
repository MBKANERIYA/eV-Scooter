import { Button } from "./Atoms/commom_components"

function Offer(){
    return(
        <div className="col-12 off-bg">
            <div className="off-card">
                <div className="col-5 p-5 offer">
                    <h6>$650</h6>
                    <h3>SilverPath Y100</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <Button content="Shop Now"/>
                </div>
            </div>
        </div>
    )
}

export default Offer