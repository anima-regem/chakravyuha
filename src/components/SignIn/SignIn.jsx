import React, { useState } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validator.isEmail(email) && password.length > 5 && name.length > 0) {
      const data = {
        name,
        email,
        password,
      };
      const res = await fetch("http://localhost:4000/api/user/register", {
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
        setName("");
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
            <h3>Welcome!</h3>
            <p>Please enter you details to continue</p>

            <form className="form">
              <div className="input_section">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="input_section">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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

              <button onClick={(e) => signup(e)} className="login_button">
                {loading ? (
                  <>
                    <ClipLoader
                      aria-label="Loading Spinner"
                      color="#000"
                      loading={loading}
                      size={20}
                    />
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
            </form>
            <div className="login_sinup_section">
              <p className="noacc">Don’t have an account?</p>
              <p className="signup">Sign up for free</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignIn;
