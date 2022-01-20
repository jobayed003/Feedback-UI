import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FeedbackProvider } from './context/FeedbackContext';
import './index.css';

ReactDOM.render(
  <FeedbackProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FeedbackProvider>,
  document.getElementById('root')
);
