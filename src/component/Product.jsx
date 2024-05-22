
function Card({ name, image, price,mrp }) {
  
    return (
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted"><img src={image} alt="" /></h6>
          <h5 class="card-title">{name}</h5>
          <span class="card-text mrp">{mrp}</span>
          <span class="card-text price">{price}</span>
          {/* <Link to={`/${val.id}`}>viewDetails</Link> */}
        </div>
      </div>
    );
  }
  
  export default Card;
  