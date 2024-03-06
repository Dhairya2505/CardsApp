import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import SigninSignup from './Components/SigninSignup.jsx'; // Replace with actual import path
import Dashboard from './Components/Dashboard.jsx'

const ProtectedRoute = ({child}) => {
    const token = localStorage.getItem('CATIT');
    if(token){
      return child;
    }
    else{
      // return <Navigate to='/' />
      return child; 
    }
};

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninSignup />} />
          <Route path="/dashboard" element={<ProtectedRoute  child={<Dashboard />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
