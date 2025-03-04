import { Route, Routes } from 'react-router-dom';

import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const Routers = () => (
    <Routes>
        <Route
            path="/"
            element={<Home />}
        />
        <Route
            path="/about"
            element={<About />}
        />
        <Route
            path="/login"
            element={<Login />}
        />
        <Route
            path="/home"
            element={<Home />}
        />
    </Routes>
);
