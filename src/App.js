import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Profile from "./layouts/Profile";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Career from "./layouts/Career";

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
