import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../SignUp/Firebase/firebase.init";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [drivingLearner, setDrivingLearner] = useState({});
  const [error, setError] = useState("");
  // Auth
  const auth = getAuth();

  // create rider account
  const createUserRider = (data, callback) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        sendRiderData(data, callback);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Create driving lesson learner account
  const createNewDrivingLearner = (data, callback) => {
    const { email, password } = data;
    console.log(data);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDrivingLearner(user);
        sendDrivingLessonData(data, callback);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Send rider login Data on database
  const sendRiderData = (data, callback) => {
    console.log(data);
    axios
      .post("/rider-user", data)
      .then((res) => {
        console.log(res);
        callback();
      })
      .catch((err) => {
        setError(err);
      });
  };

  // Login Rider Account
  const signInUser = ({ email, password }, callback) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        callback("/user-profile");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(email, password);

        axios.patch("/admin", { email, password }, callback).then((res) => {
          if (res.data.mainAdmin === true) {
            callback("/admin");
          }
        });
      });
  };

  // Send Driving lesson learner data on database
  const sendDrivingLessonData = (data, callback) => {
    axios
      .post("/learner-lesson-user", data)
      .then((res) => {
        console.log(res);
        callback();
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return {
    user,
    error,
    logOut,
    drivingLearner,
    createUserRider,
    createNewDrivingLearner,
    signInUser,
  };
};

export default useFirebase;
