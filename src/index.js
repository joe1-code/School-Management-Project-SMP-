import react from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Index from './home/Index';
import { Provider } from 'react-redux';
import { store } from './store';
const Tie = <p>Hello world</p>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


  // <BrowserRouter><Index/></BrowserRouter>
)