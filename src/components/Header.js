import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <header style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0 }}>我的网站</h1>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: 'transparent',
          border: '2px solid white',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: 'white',
            color: '#2c3e50'
          }
        }}
      >
        退出登录
      </button>
    </header>
  );
}

export default Header; 