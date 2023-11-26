import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import App from './main_page/App';
import CountryPage from './country_page/CountryPage';
import ScrollToTop from './ScrollToTop';
import cards from "./countries.json"

const countries = cards.map(country => country['card-info'][0]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<><App /><ScrollToTop /></>} />
      {countries.map((country) => (
      <Route 
        key = {country.id}
        path={country.link} 
        element={<><CountryPage content_json={country} /><ScrollToTop /></>} 
      />
      ))}
    </Routes>
{/*      <App />
    <CountryPage /> */}
  </BrowserRouter>
);
