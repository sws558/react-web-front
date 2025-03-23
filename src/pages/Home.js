function Home() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>欢迎来到首页</h2>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '1rem', color: '#2c3e50' }}>最新动态</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#2c3e50' }}>项目一</h4>
          <p>这是第一个项目的描述内容</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#2c3e50' }}>项目二</h4>
          <p>这是第二个项目的描述内容</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#2c3e50' }}>项目三</h4>
          <p>这是第三个项目的描述内容</p>
        </div>
      </div>
    </div>
  );
}

export default Home; 