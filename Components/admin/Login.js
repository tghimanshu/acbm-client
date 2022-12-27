import React, { useState } from "react";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, login } = useAuth();

  async function handleLogin() {
    try {
      await login(email, password);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Admin Login</h2>
          <p></p>
        </div>
      </div>
      <section id="contact" className="contact container mt-5">
        <div className="php-email-form">
          <div className="row d-flex justify-content-center">
            {/* {success !== "" && (
              <div className="col-md-7 form-group">
                <div className="alert alert-success">{success}</div>
              </div>
            )}
            {error !== "" && (
              <div className="col-md-7 form-group">
                <div className="alert alert-danger">{error}</div>
              </div>
            )} */}
            <div className="col-md-7 form-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-7 form-group mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
