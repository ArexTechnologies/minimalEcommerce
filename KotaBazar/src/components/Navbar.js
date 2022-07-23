import './styles.css'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import  Axios  from 'axios';
import AuthContext from "./auth-context";
import Badge from 'react-bootstrap/Badge'
import { Link , useNavigate} from "react-router-dom";
import { Store } from '../Store';



function Navbar() {
   const { state } = useContext(Store);
   const { userInfo,cart } = state;
  
    const userCtx = useContext(AuthContext);
  const isLoggedIn = userCtx.isLoggedIn;
 
  const navigate = useNavigate()
  const [cats, setCats] = useState([])
 
    // console.log(cart)          
  function openCartHandler() {
    navigate('/cart')
  }
  useEffect(() => {
    const xxx = async () => {
      const { data } = await Axios.get("https://fakestoreapi.com/products/categories")
      
      setCats(data)
    }
   xxx()
    
  }, [])
  
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            style={{ fontWeight: "bolder", fontSize: "2rem" }}
            className="navbar-brand"
            to="/"
          >
            KotaBazar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     
                { cats.map((x,i)=>{ return (
                  <li key={i}>
                    <a className="dropdown-item" href="/">
                      {x}
                    </a>
                  </li>
                )})}
                  
              
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              {userInfo ? (
                <button className="btn btn-outline-success mx-2">
                  {userInfo.name}
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("./signin");
                  }}
                  className="btn btn-outline-success"
                >
                  Sign In
                </button>
              )}
              {/* search functionality 👇🏻 */}
               <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> 
              <Link to="/cart" className="nav-link">
              
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
  }

export default Navbar