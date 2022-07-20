import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Store } from '../../Store';
import './styels.css'
function Cards(props) {
  const { product} = props
  const [wantData, setWantData] = useState([])
 
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const {
     cart: { cartItems },
   } = state;

    const [products, setProducts] = useState([]);
 useEffect(() => {
   fetch("https://fakestoreapi.com/products", {
     method: "GET",
   })
     .then((res) => {
       if (res.ok) {
         
        // console.log("data retrived Successfully",res.status);
         return res.json();
       } else {
         console.log("err");
       }
     })
     .then((data) => {
       //setProducts(products);
      //  var xxx = data.splice(0, 5).title
     
       setProducts(
        data
       );
       setWantData(data.map((x) => { return x.id }));
       console.log("this is wantdata ",{wantData})
     })
     .catch((err) => {
       alert(err.message);
     });
 }, []);
  
    async function addToCartHandler(product) {
    console.log(product.id, "this its is being sent to store");
    const existItem = cartItems.find((x) => x.id === product.id);
      // const quantity =  1;
     const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`https://fakestoreapi.com/products/${product.id}`);
    console.log(data, "added to cart")
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    ctxDispatch({
      type: "ITEMS_IN_CART",
      payload :  `${product.id}`
    })
  }
  
  return (
    <>
      {products.map((product,index) => 
      { 
        return (     
        <div className="col-md-4 " key={index}>
          <div
            className="card mx-4 my-2"
              style={{
              
              width: "20rem",
              
              padding: "20px",
              marginLeft: "50px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 20)}</h5>

              <p  className="card-text">
                
                {product.description.substring(0, 80) + "..."}
              </p>
                <p>{ product.id}</p>
              <button
                  onClick={()=> addToCartHandler(product)}
                  className="btn btn-primary"
                  
              >
                Add to cart
              </button>
              <a href="/" className="btn btn-success mx-4 ">
                Buy Now
              </a>
            </div>
          </div>
        </div>)}
      )}
    </>
  );
}

export default Cards