import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import { AuthProvider } from '../context/AuthContext';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            {/* Redirige /dashboard a /dashboard/panel */}
            <Route path='/dashboard/:section' element={<Dashboard />} />
            <Route path='/dashboard' element={<Navigate to="/dashboard/panel" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;