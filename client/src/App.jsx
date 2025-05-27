import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// componentes 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
// contextos 
import { AuthProvider } from '../context/AuthContext';
import { CursoProvider } from '../context/CursoContext';
// rutas protegidas 
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <AuthProvider>
      <CursoProvider>
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
      </CursoProvider>
    </AuthProvider>
  );
}

export default App;