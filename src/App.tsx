import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { ReactLenis } from "lenis/react";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";


function App() {


  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={ <Home />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
