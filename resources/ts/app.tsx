import '../js/bootstrap';
import React from "react";
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react'
import '../css/app.css';

import { Router } from './router';


const App = () => {

  return (<>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </>);
};
 
const container = document.getElementById('app') as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);