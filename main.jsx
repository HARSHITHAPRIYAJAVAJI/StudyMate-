import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import Library from "./Pages/Library";
import Study from "./Pages/Study";
import Flashcards from "./Pages/Flashcards";
import Quizzes from "./Pages/Quizzes";
import Planner from "./Pages/Planner";
import Collaborate from "./Pages/Collaborate";
import Timer from "./Pages/Timer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/Flashcards" element={<Flashcards />} />
          <Route path="/Quizzes" element={<Quizzes />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path="/Collaborate" element={<Collaborate />} />
          <Route path="/Timer" element={<Timer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
