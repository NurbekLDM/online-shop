import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; 
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
   // <Router>
    <App />
//   </Router> 
);
