import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserLogin = () => {
  const { signInUser } = useAuth();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    signInUser(loginInfo, (location) => {
      navigate(location, { replace: true });
    });
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <Container>
      <h2 className="text-center my-3">Log In</h2>
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={handleSignUp}>
          <input
            onChange={handleOnChange}
            value={loginInfo.email}
            name="email"
            type="email"
            className="input-field p-3"
            placeholder="Email"
          />
          <input
            onChange={handleOnChange}
            value={loginInfo.password}
            name="password"
            className="input-field p-3"
            type="password"
            placeholder="Password"
          />

          <input
            className="btn btn-primary my-2"
            type="submit"
            value="Sign In"
          />
          <p>Don't have an account? Please SignUp.</p>
          <input
            onClick={() => navigate("/rider-signup", { replace: true })}
            className="btn btn-primary mb-2"
            type="button"
            value="Rider SignUp"
          />
          <br />
          <input
            onClick={() =>
              navigate("/driving-lesson-learner", { replace: true })
            }
            className="btn btn-primary"
            type="button"
            value="Driving Lesson Learner Sign Up"
          />
        </form>
      </div>
    </Container>
  );
};

export default UserLogin;
