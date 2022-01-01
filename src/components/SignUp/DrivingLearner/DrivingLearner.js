import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DrivingLearner = () => {
  const { createNewDrivingLearner } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => handleDrivingLearner(data);

  const navigate = useNavigate();

  const handleDrivingLearner = (data) => {
    createNewDrivingLearner(data, () => {
      navigate("/user-profile", { replace: true });
    });
  };

  return (
    <>
      <Container>
        <h2 className="text-center my-3">Driving Lesson Learner</h2>
        <div className="d-flex justify-content-center">
          <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field p-3"
              placeholder="Full Name"
              {...register("fullName", { required: true, maxLength: 20 })}
            />
            <input
              className="input-field p-3"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="input-field p-3"
              placeholder="Age"
              type="number"
              {...register("age", { min: 18, max: 99 })}
            />
            <input
              className="input-field p-3"
              placeholder="Address"
              type="text"
              {...register("address")}
            />
            <input
              className="input-field p-3"
              placeholder="Phone"
              type="tel"
              {...register("Phone")}
            />
            <input
              className="input-field p-3"
              placeholder="Profile Picture"
              type="text"
              {...register("profilePicture")}
            />
            <input
              className="input-field p-3"
              placeholder="NID Picture"
              type="text"
              {...register("nidPicture")}
            />
            <input
              className="input-field p-3"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <input
              className="input-field p-3"
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword")}
            />
            <br />
            <span>Vehicle Type</span>
            <br />
            <input type="checkbox" {...register("car")} />
            <label className="ms-1">Car</label>
            <br />
            <input type="checkbox" {...register("bike")} />
            <label className="ms-1">Bike</label>
            <br />
            <input
              className="btn btn-primary my-2"
              type="submit"
              value="Sign Up"
            />
            <p>All ready have an account? Please login</p>
            <input
              onClick={() => navigate("/login", { replace: true })}
              className="btn btn-primary"
              type="button"
              value="Login"
            />
          </form>
        </div>
      </Container>
    </>
  );
};

export default DrivingLearner;
