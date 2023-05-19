import "./App.css";
import { Routes, Route } from "react-router-dom";
// import MyComponent from "./Components/Card/Card";
import Home from "./Page/Home/Home";
import SearchPage from "./Page/Search/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/" element={<MyComponent />} /> */}
      </Routes>
    </>
  );
}

export default App;
// sk.eyJ1Ijoic2hlaWxhLWEiLCJhIjoiY2xoc3p4d2lhMDB4bDNkcWhsYTY5aXFuNSJ9
// .fy062UgIJm_EC8vbG_Oe7g;
