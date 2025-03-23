import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// 受保护的路由组件
const ProtectedLayout = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedLayout><Home /></ProtectedLayout>} />
        <Route path="/about" element={<ProtectedLayout><About /></ProtectedLayout>} />
        <Route path="/services" element={<ProtectedLayout><Services /></ProtectedLayout>} />
        <Route path="/contact" element={<ProtectedLayout><Contact /></ProtectedLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
