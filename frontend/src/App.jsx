import { Container, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Clubs from "./pages/Clubs";
import News from "./pages/News";
import Friends from "./pages/Friends";
import Search from "./pages/Search";
import Navigation from "./pages/Navigation";
import Admin from "./pages/Admin";

function App() {
  return (
    <Box className="app">
      <Container maxWidth="lg">
        <Navbar />

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/news" element={<News />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/search" element={<Search />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;