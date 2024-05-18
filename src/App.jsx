// import './assets/css/style.css'
// import NavBar from './assets/components/NavBar'

// import LandingPage from './assets/components/LandingPage'
// function App() {
//   return (
//     <>
//       <NavBar />
//       <LandingPage/>
//     </>
        
//   );
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import LandingPage from './assets/components/LandingPage';
import Jobs from './assets/components/Jobs';
import Companies from './containers/APP/Companies';
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
