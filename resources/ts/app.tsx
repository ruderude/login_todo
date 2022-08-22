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


const App = () => {
  const title: string = "Laravel 9 Vite with TypeScript React !!";
  return (<>
    <CssBaseline />
    <Container maxWidth="sm">
      <BrowserRouter>
          <Header />
          <main className="">
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