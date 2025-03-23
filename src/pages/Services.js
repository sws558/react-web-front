function Services() {
  const services = [
    {
      title: '网站开发',
      description: '专业的网站开发服务，包括前端和后端开发',
      icon: '💻'
    },
    {
      title: '移动应用',
      description: 'iOS和Android应用开发，提供完整的移动解决方案',
      icon: '📱'
    },
    {
      title: '云服务',
      description: '云计算解决方案，包括部署、维护和优化',
      icon: '☁️'
    },
    {
      title: '技术咨询',
      description: '专业的技术咨询服务，帮助企业进行数字化转型',
      icon: '📊'
    }
  ];

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '2rem', color: '#2c3e50', textAlign: 'center' }}>我们的服务</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              color: '#2c3e50',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {service.title}
            </h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services; 