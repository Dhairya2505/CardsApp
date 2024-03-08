import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import SigninSignup from './Components/SigninSignup.jsx'; // Replace with actual import path
import Dashboard from './Components/Dashboard.jsx'
import Card from './Components/Card.jsx';
import Details from './Components/Details.jsx';

const ProtectedRoute = ({child}) => {
    const bearerToken = localStorage.getItem('CATIT');
    if(bearerToken){
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
          <Route path="/dashboard" element={<ProtectedRoute  child={<Dashboard component={<Details />}/>} />} />
          <Route path="/card" element={<ProtectedRoute  child={<Dashboard component={<Card />}/>} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
