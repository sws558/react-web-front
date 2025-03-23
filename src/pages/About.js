function About() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50' }}>关于我们</h2>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          我们是一家致力于提供优质服务的公司，专注于为客户创造价值。
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>我们的使命</h3>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          通过创新和专业的服务，帮助客户实现业务增长和数字化转型。
        </p>
        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#2c3e50' }}>我们的愿景</h3>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          成为行业领先的服务提供商，为客户创造持续的价值。
        </p>
      </div>
    </div>
  );
}

export default About; 