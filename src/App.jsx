import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/object";
import MenuBar from "./pages/menubar";
import Users from "./pages/users";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/object" element={<UserList />} />
      <Route path="/menubar" element={<MenuBar />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;