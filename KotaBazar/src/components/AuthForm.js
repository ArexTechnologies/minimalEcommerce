import "./styles.css";
import Axios from 'axios'
import { Store } from "../Store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, {  useContext, useState ,useEffect} from "react";




export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        "http://localhost:5001/api/users/signin",
        {
          email,
          password,
        }
      ).then((res)=> console.log(res));
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      console.log(err)
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
      <h1> Login</h1>
      <form className="customInput" onSubmit={submitHandler}>
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
          <button className="btn btn-primary customButton" type="submit">
            Sign In
          </button>
         
          <div className="mb-3">
            New customer?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </section>
  );
}


