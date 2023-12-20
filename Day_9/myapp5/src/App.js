import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Edituser from "./components/Edituser";
import Adduser from "./components/Adduser";

import './assets/css/core.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </>
  );
}

export default App;
