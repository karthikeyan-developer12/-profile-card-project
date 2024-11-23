import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Usercard} from "../Cardproject.js";
import { Qrcode } from './Qrprojects.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Usercard/>
  </>
   
  );

reportWebVitals();
