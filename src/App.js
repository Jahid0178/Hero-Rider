import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/contexts/AuthProvider/AuthProvider";
import AdminPanel from "./components/PrivateRoute/AdminPanel/AdminPanel";
import UserProfile from "./components/PrivateRoute/UserProfile/UserProfile";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import DrivingLearner from "./components/SignUp/DrivingLearner/DrivingLearner";
import RiderRegister from "./components/SignUp/RiderLogin/RiderRegister";
import UserLogin from "./components/UserLogin/UserLogin";

function App() {
  axios.defaults.baseURL = "https://hero-riders.herokuapp.com";
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<RiderRegister />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/rider-signup" element={<RiderRegister />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<UserLogin />} />
            <Route
              path="/driving-lesson-learner"
              element={<DrivingLearner />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
