import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Home} from '../views/views';

export default function AppRoutes() {
    return (
        <div className="main_container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate replace to="/" />}></Route>
            </Routes>

        </div>

    );
}