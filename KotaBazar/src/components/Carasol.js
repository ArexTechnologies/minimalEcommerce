import React, { Fragment, useContext } from "react";
import { Store } from "../Store.js";
import Cards from "./Cards/Cards.jsx";
import "./styles.css"

function Carasol() {
  
  
 const { state, dispatch: ctxDispatch } = useContext(Store);
 const { userInfo } = state;
  

  return (
    <Fragment>
      <div className="row">
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
                src="http://placekitten.com/1920/1200"
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}>Sale</h5>
                <p style={{ color: "gray" }}>We provide quality not quantity</p>
              </div>
            </div>

            <div className=" carousel-item img-gradient">
              <img
                src="http://placekitten.com/1920/1195"
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}>Second slide label</h5>
                <p style={{ color: "gray" }}>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>

            <div className=" carousel-item  bg-gradient">
              <img
                src="http://placekitten.com/1920/1205"
                className="customGradient d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{ color: "gray" }}>Third slide label</h5>
                <p style={{ color: "gray" }}>
                  Some representative placeholder content for the third slide.
                </p>
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
      <div className="flexPro">
        <Cards />
      </div>
    </Fragment>
  );
}

export default Carasol;
