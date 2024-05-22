import { Link } from "react-router-dom";
import Card from "../Product";

function ShopAll(){

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

export default ShopAll