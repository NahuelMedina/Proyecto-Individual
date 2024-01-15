import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar, Landing, Home, CreateDriver } from "./components";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createDriver" element={<CreateDriver />} />
      </Routes>
    </>
  );
}

export default App;
