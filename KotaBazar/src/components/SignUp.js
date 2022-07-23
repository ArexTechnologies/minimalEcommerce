import "./styles.css";
import Axios from "axios";
import { Store } from "../Store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";

export default function SignUpScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";
      const [confirmPassword, setConfirmPassword] = useState("");
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "http://localhost:5001/api/users/signup",
        { name,
          email,
          password,
        }
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  // const navigate = useNavigate();

  return (
    <section className="customForm ">
      <h1> Signup</h1>
      <form className="customInput" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Your Name</label>
          <input
            className="form-control"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Your Email</label>
          <input
            className="form-control"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Your Password</label>
          <input
            className="form-control"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="btn btn-primary customButton" type="submit">
            Sign up
          </button>

          <div className="mb-3">
            Already Have An Account?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </section>
  );
}
