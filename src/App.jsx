import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YouGotPhished from './pages/got-phished/got-phished'
import FreeShippingOffer from './pages/free-shipping/FreeShippingOffer'
import SecurityUpdate from './pages/security-update/security-update'  
import MFADeployment from './pages/mfa-deployment/mfa-deployment'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<YouGotPhished />} />
        <Route path="/security-update" element={<SecurityUpdate />} />
        <Route path="/mfa-deployment" element={<MFADeployment />} />
        <Route path="/free-shipping-offer" element={<FreeShippingOffer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
