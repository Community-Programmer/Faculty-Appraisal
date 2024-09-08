import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Publication from "./pages/Publication/Publication";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/publication" element= {<Publication/>}></Route>
        </Route>

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
