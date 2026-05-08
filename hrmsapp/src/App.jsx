// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LoginPage from "./pages/LoginPage";
// import Dashboard from './components/Dashboard';
// import Rightpanel from './components/Rightpanel';
// import './App.css'

// function App() {
//   return (
//     <>
//      <LoginPage />
//      <Rightpanel />
//     </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Dashboard from "./components/Dashboard";
import Rightpanel from './components/Rightpanel';
import ProtectedRoute from "./routes/ProtectedRoute";
import './App.css'

function App() {
  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<LoginPage />} />

      {/* protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Rightpanel />} />
      </Route>
    </Routes>
  );
}

export default App;
