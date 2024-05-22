import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../Atoms/commom_components";


function Details({}) {
  let { id } = useParams();

  let data = [
    {
      id: "1",
      image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-03-a-400x525.jpg",
      name: "Libero X350",
      mrp: "$700",
      price: "$620",
      ship: "& Free Shipping",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      id: "2",
      image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-04-a-400x525.jpg",
      name: "Practico S2 Exclusive",
      mrp: "$750",
      price: "$700",
      ship: "& Free Shipping",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      id: "3",
      image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
      name: "U-Lock Force MAX",
      mrp: "$80",
      price: "$70",
      ship: "& Free Shipping",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      id: "4",
      image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
      name: "Unbeatable Lock 100",
      mrp: "$80",
      price: "$70",
      ship: "& Free Shipping",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },

  ];
  let result = data.filter((val) => val.id == id);
  result = result[0];
console.log(result);

    return (
        <div className="col-8 mx-auto row details">
          <div className="col-6">
          <h6 class="card-subtitle mb-2 text-muted"><img src={result.image} alt="" /></h6>
          </div>
          <div className="col-6">
          <span style={{color: " #c93535"}}>Electric Scooters</span>
          <h3 class="card-title mt-4">{result.name}</h3>
          <span class="card-text mrp mrp1">{result.mrp}</span>
         <span class="card-text price mrp2 mr-3">{result.price}</span>
         <span>{result.ship}</span>
         <p className="mt-4">{result.details}</p>
         <Button content="Add To Cart" classs="mb-4 mt-3"/>
         <ul className="p-0 list-unstyled">
          <li>No-Risk Money Back Guarantee!</li>
          <li>No Hassle Refunds</li>
          <li>Secure Payments</li>
         </ul>
          </div>
        </div>

      );
}

export default Details