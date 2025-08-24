import React from 'react';

const Navigation = ({ currentView, setCurrentView }) => {
  const views = [
    { key: 'posts', label: 'Posts' },
    { key: 'about', label: 'About' },
    { key: 'home', label: 'Home' }
  ];

  return (
    <nav style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '8px'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 'bold', marginRight: '15px' }}>
          Navigate to test caching:
        </span>
        
        {views.map((view) => (
          <button
            key={view.key}
            onClick={() => setCurrentView(view.key)}
            style={{
              backgroundColor: currentView === view.key ? '#007bff' : '#6c757d',
              color: 'white',
              padding: '8px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {view.label}
          </button>
        ))}
      </div>
      
      <p style={{ 
        margin: '10px 0 0 0', 
        fontSize: '12px', 
        color: '#6c757d' 
      }}>
        💡 Navigate away from Posts and back to see caching in action!
      </p>
    </nav>
  );
};

export default Navigation;