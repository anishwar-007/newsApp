import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Login from "./components/Login";
import "./app.css";

function App() {
  return (
    <NewsContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<News />} />
          </Routes>
        </div>
      </Router>
    </NewsContextProvider>
  );
}

export default App;
