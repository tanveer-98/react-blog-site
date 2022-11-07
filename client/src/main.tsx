import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router}from 'react-router-dom'
// import './input.css'
import {Provider} from 'react-redux'
import  store  from './store'

declare global {
  interface Window {
    cloudinary: any;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <Provider store = {store}>
    <Router>
      <App />
    </Router>
    </Provider>
 
)
