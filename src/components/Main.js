function Main() {
  const items = [
    { id: 1, name: '项目一', description: '这是第一个项目的描述' },
    { id: 2, name: '项目二', description: '这是第二个项目的描述' },
    { id: 3, name: '项目三', description: '这是第三个项目的描述' },
    { id: 4, name: '项目四', description: '这是第四个项目的描述' }
  ];

  return (
    <main style={{
      flex: 1,
      padding: '2rem',
      backgroundColor: '#ffffff'
    }}>
      <h2>主要内容</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li 
            key={item.id}
            style={{
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#f5f5f5',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
            <p style={{ margin: 0, color: '#666' }}>{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main; 