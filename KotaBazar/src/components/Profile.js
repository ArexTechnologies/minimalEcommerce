import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";
import Navbar from "./Navbar";
import UserForm from "./UserForm";
import "./styles.css";

function Profile() {
  const storedUsername = localStorage.getItem("username");
   
  const userCtx = useContext(AuthContext);
  const [data, setData] = useState(null);
  const preLoadedValues = {
    name: "name",
    mobile: "number",
    address1: "enteredAddress1",
    address2: "enteredAddress2",
    city: "enteredCity",
    state: "enteredState",
    pin: "enteredPin",
    email: "enteredEmail",
  };
  const navigate = useNavigate();
  const profCtx = useContext(AuthContext);
  const isLoggedIn = profCtx.isLoggedIn;
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const address1InputRef = useRef();
  const address2InputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const pinInputRef = useRef();
  const emailInputRef = useRef();
  var [userData, setUserData] = useState("");
  var fetchedAddress = useRef();

  const onSaveHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredAddress1 = address1InputRef.current.value;
    const enteredAddress2 = address2InputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredPin = pinInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    event.preventDefault();
    //auth-development-8bb8c
    let url =
      "https://auth-development-8bb8c-default-rtdb.firebaseio.com/users.json";
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id: "user",
        name: enteredName,
        mobile: enteredMobile,
        address1: enteredAddress1,
        address2: enteredAddress2,
        city: enteredCity,
        state: enteredState,
        pin: enteredPin,
        email: enteredEmail,
      }),
    }).then((res) => {
      if (res.ok) {
        // console.log("posted successfully");

        return res.json();
      } // else {console.log("failed to")}
    });
    navigate("/");
  };

  useEffect(() => {
    fetch(
      "https://auth-development-8bb8c-default-rtdb.firebaseio.com/users.json?print=pretty",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (res.ok) {
          // alert("login/signup successful");
          console.log('this is the response',res);
          return res.json();
        } else {
          console.log("err");
        }
      })
      .then((uData) => {
        console.log('this is udata',uData)

        //

        console.log(userCtx.userName, "hi");
        localStorage.setItem("username", userCtx.userName);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  
  function isDataAvailable() {
  
}


  
  return (
    <React.Fragment>
      <Navbar />

      {isLoggedIn ? (
        <div className="container customeProfileForm">
            {/* <p>
              {userData.map((user,id) => (
                <li key={id}>{console.log(user)}</li>
              ))}
            </p> */}

          <form onSubmit={onSaveHandler}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Name"
                  required
                  ref={nameInputRef}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Mobile Number"
                  required
                  ref={mobileInputRef}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                required
                ref={address1InputRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                required
                ref={address2InputRef}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  required
                  ref={cityInputRef}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select
                  id="inputState"
                  required
                  ref={stateInputRef}
                  className="form-control"
                >
                  <option value>Choose...</option>
                  <option>Rajasthan</option>
                  <option>Gujrat</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  required
                  ref={pinInputRef}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your Email</label>
              <input
                defaultValue={storedUsername}
                className="form-control"
                type="email"
                id="email"
                required
                ref={emailInputRef}
                disabled
              />
            </div>

            <button type="submit" className="btn btn-primary customeSave">
              Save
            </button>
          </form>
        </div>
      ) : (
        <a href="/">
          <h1>Please Login to Continue</h1>
        </a>
      )}
    </React.Fragment>
  );
}

export default Profile;
