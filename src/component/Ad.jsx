function Ad(img){
    return(
        <div className="col-12 bgi">
        <div className="col-5 ad">
        <div class="card" style={{ width: "100%" }}>
        <div class="card-body ad-body">
          <h6 class="card-subtitle mb-2 text-muted text-center"><img src={img.img} alt="" /></h6>
          <p className="text-center">City</p>
          <h5 class="card-title text-center">Electric Scooter Z400</h5>
          <p class="card-text text-center">$650</p>
          {/* <Link to={`/${val.id}`}>viewDetails</Link> */}
        </div>
      </div>
      </div>
      </div>
    )
}

export default Ad