import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

window.addEventListener('scroll',scrollActive);

 /* Scroll reveal animation */

 const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay:400,
  // reset:true
})

sr.reveal('.banner_1');
sr.reveal('.banner_2',{origin:'bottom'});
sr.reveal('.skills_1',{origin:'left'});
sr.reveal('.skills_2',{origin:'right'});


