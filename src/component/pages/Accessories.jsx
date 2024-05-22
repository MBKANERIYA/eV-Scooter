import { Link } from "react-router-dom";
import Card from "../Product";

function Accessories(){
    let data = [
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$800",
          price: "$760"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$1050",
          price: "$900"
        },
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$800",
          price: "$760"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$1050",
          price: "$900"
        },
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$800",
          price: "$760"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$1050",
          price: "$900"
        },
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$800",
          price: "$760"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$1050",
          price: "$900"
        },
        {
          id: "3",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg",
          name: "U-Lock Force MAX",
          mrp: "$800",
          price: "$760"
        },
        {
          id: "4",
          image: "https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg",
          name: "Unbeatable Lock 100",
          mrp: "$1050",
          price: "$900"
        },
    
      ];
    return(
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
      </div>
    )
}

export default Accessories