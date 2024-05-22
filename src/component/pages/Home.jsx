import About from "./About";
import Card from "../Product";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import img2 from "../images/scooter-01.png"
import img3 from "../images/scooter-02.png"
import img4 from"../images/signature-01.png"
import Ad from "../Ad";
import Sign from "../Sign";
import img5 from "../images/accessories-01.png"
import Acc from "../Acc"
import Services from "../Services";
import Offer from "../Offer";
import { Button } from "../Atoms/commom_components";


function Home(){

    let data = [
        {
          id: "1",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-03-a-400x525.jpg",
          name: "Libero X350",
          mrp: "$700",
          price: "$620"
        },
        {
          id: "2",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-04-a-400x525.jpg",
          name: "Practico S2 Exclusive",
          mrp: "$750",
          price: "$700"
        },
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$80",
          price: "$70"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$100",
          price: "$90"
        },
    
      ];

    return(

        <>
        <Banner img={img2}/>
        <About/>

        <div className="row col-md-12 position-relative Product">
            {data.map((val) => {
              return (
                <>
                  <div className="col-md-3 d-flex justify-content-center">
                    <Card name={val.name} image={val.image} price={val.price} mrp={val.mrp} />
                    <Link className="pro-details" to={`/${val.id}`}>ViewDetails</Link>
                  </div>
                </>
              );
            })}
               <Link to="/shopall">
                    <Button content="View All" classs="viewAll"/>
                </Link>
          </div>

          <Ad img={img3}/>
          <Sign img={img4}/>
          <Acc img={img5}/>
          <Services/>
          <Offer/>
        
        </>
    )
}

export default Home;