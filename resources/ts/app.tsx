import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';

const App = () => {
  const title: string = "Laravel 9 Vite with TypeScript React !!";
  return <h1>{title}</h1>;
};
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);