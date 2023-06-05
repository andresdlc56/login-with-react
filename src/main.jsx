import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

//Components
import { LoginApp } from './LoginApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginApp />
    </BrowserRouter>
  </React.StrictMode>,
)
