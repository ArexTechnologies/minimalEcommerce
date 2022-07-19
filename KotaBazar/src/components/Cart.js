import React,{useContext} from 'react'
import { Store } from '../Store'
import Navbar from './Navbar'
export default function Cart() {
    const { state } = useContext(Store)
    const {cart} = state
    return (
        <>
            <Navbar/>
        <div className="mx-6 my-4 text-center ">
          <div
            style={{
              border: "1px solid",
              borderRadius: "25px",
              display: "inline-block",
            }}
            className="px-2 py-2"
          >
            <h1>Items in cart {cart.cartItems.length}</h1>
            <button className="btn btn-primary my-2"> Checkout</button>
          </div>
        </div>
      </>
    );
}
