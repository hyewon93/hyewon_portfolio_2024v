import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Career from "./Components/Career";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/skills" exact element={<Skills />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
          <Route path="/career" exact element={<Career />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
