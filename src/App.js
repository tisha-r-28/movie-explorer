import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Movies from "./components/Movies";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import MovieDetails from "./components/MovieDetails";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route element={<PrivateRoute />}>
                        <Route path="/movies" element={<Movies />}/>
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/movie-details" element={<MovieDetails />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;