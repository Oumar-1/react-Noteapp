import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = ReactDom.createRoot(document.getElementById('root'));
// the basename='/react-Noteapp' is just for github-pages so if you gonna
// host it somewehre else or on you server please remove it 
// or even if you gonna host it on local host 
Root.render(
  <Router basename='react-Noteapp'>
    <App />
  </Router>
);
