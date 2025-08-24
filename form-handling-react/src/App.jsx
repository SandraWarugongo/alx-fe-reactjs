import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import PostsComponent from './components/PostsComponent';
import Navigation from './components/Navigation';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data stays fresh for 5 minutes
      staleTime: 5 * 60 * 1000,
      // Cache data for 10 minutes
      cacheTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  const [currentView, setCurrentView] = useState('posts');

  const renderView = () => {
    switch(currentView) {
      case 'posts':
        return <PostsComponent />;
      case 'about':
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>About Page</h2>
            <p>This is a demo of React Query caching behavior.</p>
            <p>Navigate back to Posts to see cached data load instantly!</p>
          </div>
        );
      case 'home':
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Home Page</h2>
            <p>Welcome to React Query Demo!</p>
            <p>Check the Network tab in DevTools when navigating.</p>
          </div>
        );
      default:
        return <PostsComponent />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo - Testing Caching</h1>
        
        <Navigation 
          currentView={currentView} 
          setCurrentView={setCurrentView} 
        />
        
        {renderView()}
      </div>
      
      {/* DevTools - only shows in development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;