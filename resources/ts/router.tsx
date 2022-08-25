import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/layouts';
import { Home } from './pages/home';
import { Login, SignUp, Admin, Me } from './pages/auth';
import { NotFound } from './components/error';


export const Router = () => {
  return (<>
    <BrowserRouter>
        <Header />
        <main>
          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/me">
              <Me />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </main>
    </BrowserRouter>
  </>);
};


