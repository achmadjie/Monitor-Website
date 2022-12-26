import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Monitoring from "./pages/monitoring/Monitoring";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import FourOFour from "./components/404/404";
import { useState } from "react";
import Auth from "./components/authentication/auth";
import AuthLogin from "./components/authentication-login/AuthLogin"
import 'antd/dist/antd.min.css';
import "./App.css";
import SuccessAdd from "./components/popup/success-add/SuccessAdd";
import SuccessEdit from "./components/popup/success-edit/SuccessEdit";
import SuccessRemove from "./components/popup/success-remove/SuccessRemove";


function App() {
  
  const [showHeadFoot, setShowHeadFoot] = useState(true)
  
  const NoMatch = () => {
    return <FourOFour />
  }

  return (
    <div className="App">
        {
          showHeadFoot && <Navbar />
        }
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/successadd" element={<SuccessAdd />} />
          <Route path="/successedit" element={<SuccessEdit />} />
          <Route path="/successremove" element={<SuccessRemove />} />
          <Route element={<Auth />}>
            <Route path="/monitoring" element={<Monitoring />} />
          </Route>
          <Route element={< AuthLogin/>}>
            <Route path="/login" element={<Login funcHeadFoot={setShowHeadFoot} />} />
            <Route path="/signup" element={<Signup funcHeadFoot={setShowHeadFoot} />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {
          showHeadFoot && <Footer />
        }
    </div>
  );
}

export default App;
