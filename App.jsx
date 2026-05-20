import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Portfolio from "./pages/Portfolio";
import ProfileForm from "./pages/ProfileForm";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/challenges" element={<Challenges />} />

        <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/profile" element={<ProfileForm />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;