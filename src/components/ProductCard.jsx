import React from 'react'
import { Link } from 'react-router-dom'


function ProductCard(
    {
        id,
        Name,
        Price,
        Category,
        Description,
        Stock
    }
) {
  return (
    <div className="card" style={{width: "18rem"}}>
 
  <div className="card-body">
    <h5 className="card-title"> Name: {Name}</h5>
    <h6 className="card-subtitle mb-2 text-muted"> Price: ${Price}</h6>
    <h6 className="card-subtitle mb-2 text-muted"> Category: {Category}</h6>
    <h6 className="card-subtitle mb-2 text-muted"> Stock: {Stock}</h6>
    {Description && <p className="card-text">{Description}</p>}
    <Link to={`/editproduct/${id}`} className=' btn btn-primary my-1'>Edit</Link>
  </div>
</div>
  )
}

export default ProductCard