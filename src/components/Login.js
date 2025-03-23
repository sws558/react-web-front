import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // 登录逻辑
      if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      }
    } else {
      // 注册逻辑
      if (username && password && confirmPassword && email) {
        if (password !== confirmPassword) {
          alert('两次输入的密码不一致！');
          return;
        }
        // 这里可以添加实际的注册API调用
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        padding: '2.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#2d3748',
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>
          {isLogin ? '欢迎回来' : '创建账号'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '500'
            }}>用户名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease',
                ':focus': {
                  borderColor: '#667eea',
                  boxShadow: '0 0 0 3px rgba(102,126,234,0.1)'
                }
              }}
              required
            />
          </div>

          {!isLogin && (
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#4a5568',
                fontWeight: '500'
              }}>邮箱</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                required
              />
            </div>
          )}

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#4a5568',
              fontWeight: '500'
            }}>密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
              required
            />
          </div>

          {!isLogin && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#4a5568',
                fontWeight: '500'
              }}>确认密码</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                required
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.875rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#5a67d8',
                transform: 'translateY(-1px)'
              }
            }}
          >
            {isLogin ? '登录' : '注册'}
          </button>
        </form>

        <div style={{ 
          marginTop: '1.5rem', 
          textAlign: 'center',
          color: '#4a5568'
        }}>
          {isLogin ? '还没有账号？' : '已有账号？'}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              cursor: 'pointer',
              marginLeft: '0.5rem',
              fontWeight: '600',
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {isLogin ? '立即注册' : '立即登录'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login; 