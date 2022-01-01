import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LessonLearnerResult from "../../Result/LessonLearnerResult";
import RiderResult from "../../Result/RiderResult";

const AdminPanel = () => {
  const [riders, setRiders] = useState([]);
  const [lessonUser, setLessonUser] = useState([]);

  useEffect(() => {
    // const url = "http://localhost:5000";
    // fetch(url + "/rider-user")
    //   .then((res) => res.json())
    //   .then((data) => setRiders(data));

    axios.get("/rider-user").then((res) => setRiders(res.data));
    axios.get("/learner-lesson-user").then((res) => setLessonUser(res.data));

    // fetch(url + "/learner-lesson-user")
    //   .then((res) => res.json())
    //   .then((data) => setLessonUser(data));
  }, []);
  return (
    <>
      <Container className="my-4">
        <button className="btn btn-primary me-4">Rider</button>
        <button className="btn btn-primary">Lesson Learner</button>

        <RiderResult data={riders}></RiderResult>
        <LessonLearnerResult data={lessonUser}></LessonLearnerResult>
      </Container>
    </>
  );
};

export default AdminPanel;
