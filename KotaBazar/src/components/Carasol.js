import React, { Fragment, useContext } from "react";
import { Store } from "../Store.js";
import sales from '../../src/5785216.jpg'
import sales2 from '../4902560.jpg'
import Cards from "./Cards/Cards.jsx";
import sales3 from '../4927863.jpg'
import fruits from '../aug_2_04.jpg'
import "./styles.css"

function Carasol() {
  
  
 const { state, dispatch: ctxDispatch } = useContext(Store);
 const { userInfo } = state;
  

  return (
    <Fragment>
      <div className="row carouselPerfecter">
        <div
          id="carouselExampleIndicators"
          className="customCarasol carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="customCarasol carousel-item active">
              <img
                src={sales3}
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}></h5>
                <p style={{ color: "gray" }}></p>
              </div>
            </div>

            <div className=" carousel-item img-gradient">
              <img
                src={sales}
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}></h5>
                <p style={{ color: "gray" }}></p>
              </div>
            </div>

            <div className=" carousel-item  bg-gradient">
              <img
                src={sales2}
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}></h5>
                <p style={{ color: "gray" }}></p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="">
            <div style={{ width: "18rem" }} className=""></div>
          </div>
        </div>
      </div>
      <div className="flexPro ">
        <Cards />  <img style={{overflow : "auto",height : "18rem",width : "47rem",marginLeft : "1.5rem",borderRadius : "25px",cursor : "pointer"}} src={fruits} alt="fruits" />
      </div>
      <div style={{ margin: "2rem", marginTop : "4rem" }}>
        <h2 style={{marginLeft : "1rem"}}>Products you will definately love ❤️</h2>
        <div className="scroll">
          
          <Cards />
        </div>
      </div>
    </Fragment>
  );
}

export default Carasol;
