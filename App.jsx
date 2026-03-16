import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './protected/ProtectedRoute';

// Pages
import Home from './pages/HeroSeletion';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import HeroSelection from './pages/HeroSeletion';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  const user = null; // Simulate no user logged in
  return (
    <AuthProvider>
      <Navbar /> {/* Navbar can now access theme and user from context */}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hero" element={<HeroSelection />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer /> {/* Footer can also access theme and user from context if needed */}
    </AuthProvider>
  );
}

export default App