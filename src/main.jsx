import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'

// remix icone
import 'remixicon/fonts/remixicon.css'
// animate
import 'animate.css';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

import { PreLoader } from './components/PreLoader.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PreLoader/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
