import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { CreatedForm } from './pages/createdForm/CreatedForm';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js.map';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatedForm />} />
        <Route path="/update/:id" element={<CreatedForm update={true} />} />
      </Routes>   
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
