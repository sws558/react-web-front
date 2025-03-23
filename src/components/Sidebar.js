import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { path: '/', icon: '🏠', text: '首页' },
    { path: '/about', icon: 'ℹ️', text: '关于' },
    { path: '/services', icon: '⚙️', text: '服务' },
    { path: '/contact', icon: '📞', text: '联系我们' }
  ];

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    color: '#4a5568',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    margin: '0.5rem',
    gap: '0.5rem'
  };

  const activeLinkStyle = {
    backgroundColor: '#2c3e50',
    color: 'white'
  };

  return (
    <nav style={{
      width: '250px',
      backgroundColor: '#f8f9fa',
      height: 'calc(100vh - 64px)',
      padding: '1rem 0',
      boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
    }}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeLinkStyle : {})
          })}
        >
          <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
          <span>{item.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar; 