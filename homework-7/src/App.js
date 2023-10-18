import Suppliers from "./homework-7/Suppliers";
import Orders from "./homework-8/Orders";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Link to="/">Orders Homework 8</Link>
        </li>
        <li>
          <Link to="/homework7">Suppliers Homework 7</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/homework7" element={<Suppliers />} />
      </Routes>
    </>
  );
}

export default App;
