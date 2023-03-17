import react from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Index from './home/Index';

const Tie=<p>Hello world</p>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><App /></BrowserRouter>
  // <BrowserRouter><Index/></BrowserRouter>
)