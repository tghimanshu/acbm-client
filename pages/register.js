import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        name === "" ||
        email === "" ||
        contact === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setError("Fill Required Fields...");
        setTimeout(() => setError(""), 5000);
        return;
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setError("Invalid Email");
        setTimeout(() => setError(""), 5000);
        return;
      }

      if (password !== confirmPassword) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setError("Passwords don't match");
        setTimeout(() => setError(""), 5000);
        return;
      }
      const data = await axios.post(
        "https://acbm-server.herokuapp.com/api/student/register",
        {
          name,
          email,
          contact,
          college,
          course,
          password,
        }
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setSuccess("Student Successfully Pre Registered");
      setTimeout(() => setSuccess(""), 5000);
    } catch (error) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      console.log(error);
      setError("error occured");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <>
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Pre Register</h2>
          <p></p>
        </div>
      </div>
      <section id="contact" className="contact container mt-5">
        <form className="php-email-form">
          <div className="row d-flex justify-content-center">
            {success !== "" && (
              <div className="col-md-7 form-group">
                <div className="alert alert-success">{success}</div>
              </div>
            )}
            {error !== "" && (
              <div className="col-md-7 form-group">
                <div className="alert alert-danger">{error}</div>
              </div>
            )}
            <div className="col-md-7 form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                type="number"
                className="form-control"
                placeholder="Your Contact Number"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="col-md-7 form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your College Name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="col-md-7 form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Course Name"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
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
            <div className="col-md-7 form-group mt-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
