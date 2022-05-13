import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  /*
    console.log(isFetching);
    console.log(error);
    console.log(user);
    */

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="loginLogo">BANd</h3>
          </Link>
          <span className="loginDesc">Banding together through music.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot"> Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Create a New Account"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
