import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validator.isEmail(email) && password.length > 5) {
      const data = {
        email,
        password,
      };
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const json = await res.json();
        dispatch(setUser(json));
        setEmail("");
        setPassword("");
        navigate("/");
        setLoading(false);
      }
    }
    setLoading(false);
  };

  return (
    <div className="row login_wrapper">
      <div className="col-lg-6">
        <div className="container">

          <div className="login_section">
            <h3>Welcome back</h3>
            <p>Please enter you details to continue</p>
            <form className="form">
              <div className="input_section">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="input_section">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button onClick={(e) => login(e)} className="login_button">
                {loading ? (
                  <>
                    <ClipLoader
                      aria-label="Loading Spinner"
                      color="#fff"
                      loading={loading}
                      size={20}
                    />
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
              <div className="login_sinup_section">
                <p className="noacc">Don’t have an account?</p>
                <p className="signup">Sign up for free</p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
