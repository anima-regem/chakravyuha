import React, { useState } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const BusinessSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cin, setCin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validator.isEmail(email) && password.length > 5 && name.length > 0) {
        // Create a FormData object to handle the file upload
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("file", selectedFile); // Append the selected file to the form data
  
        const res = await fetch("http://localhost:4000/api/user/register", {
          method: "POST",
          body: formData, // Send the form data
        });
      if (res.ok) {
        const json = await res.json();
        dispatch(setUser(json));
        setEmail("");
        setCin("");
        setName("");
        setPassword("");
        setSelectedFile(null);
        navigate("/");
        setLoading(false);
      }
    }
    setLoading(false);
  };
  const handleFileChange = (e) => {
    // Store the selected file in the state
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="row login_wrapper">
      <div className="col-lg-6">
        <div className="container mt-12">

          <div className="login_section">
            <h3 className="">Welcome!</h3>
            <p>Please enter you details to continue</p>

            <form className="form">
              <div className="input_section">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Business Name"
                />
              </div>
              <div className="input_section">
                <input
                  value={cin}
                  onChange={(e) => setCin(e.target.value)}
                  type="text"
                  placeholder="CIN (Company Identification Number)"
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
              <div className="input_section">
                <br/>Tax Invoice (Recent)<br/>
                <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf" // Specify the accepted file types
                onChange={handleFileChange} // Handle file input change
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUp;
