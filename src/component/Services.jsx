import { P } from "./Atoms/commom_components"

function Services(){
    return(
        <>
            <div className="col-4 mx-auto text-center">
                <h1>Why choose us</h1>
                <P content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
            </div>
            <div className="col-8 row mx-auto text-center mt-5 mb-5">
                <div className="col-4">
                    <img src="" alt="" />
                    <h4>Fast Delivery</h4>
                    <P content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <h4>Order Tracking</h4>
                    <P content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
                </div>
                <div className="col-4">
                    <img src="" alt="" />
                    <h4>Secure Payment</h4>
                    <P content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
                </div>
            </div>
        </>
    )
}

export default Services