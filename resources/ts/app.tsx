import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import '../js/bootstrap';
import '../css/app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Header } from './components/layouts';
import { NotFound } from './components/error';
import { Home } from './pages/home';
import { Login } from './pages/auth';

import { makeStyles } from "@material-ui/core";


const App = () => {

  const useStyle = makeStyles(() => ({
    margin_top: {
      marginTop: 80,
    },
  }));

  const classes = useStyle();

  return (<>
    <CssBaseline />
    <Container maxWidth="sm">
      <BrowserRouter>
          <Header />
          <main className={classes.margin_top}>
            <Routes >
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login />} />
              <Route path={`*`} element={<NotFound />} />
            </Routes>
          </main>
      </BrowserRouter>
    </Container>
  </>);
};
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);