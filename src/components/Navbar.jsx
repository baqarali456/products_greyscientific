import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [search,setSearch] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if (!search?.trim()) return;
        let id;
        id = setTimeout(()=>{
            navigate(`searchproducts/${search}`)
        },500)
    
        return ()=> clearTimeout(id);
    },[search,navigate])

    useEffect(()=>{
        if (search?.trim() === '') {
            navigate('/');
        }
    },[search,navigate])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ProductApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/addproduct" className="nav-link" >Add Product</Link>
        </li>
      </ul>
      <div>

        <input placeholder="Search Products By Name" onChange={(e)=>setSearch(e.target.value)} className="form-control me-2" type="search"  aria-label="Search"/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar;