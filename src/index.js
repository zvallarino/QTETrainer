import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';  

const StyledApp = styled.div`
  min-height: 100vh; 
  background-color: #bf4040


`

ReactDOM.render( 
  <StyledApp> 
  <Router> 
  
    <App />
    
  </Router>
  </StyledApp>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

