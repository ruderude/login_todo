import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Header } from './components/layouts';
import { Home } from './pages/home';
import { Login } from './pages/auth';

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <main className="">
          <Routes >
            <Route path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Routes>
        </main>
    </BrowserRouter>
  );
};