import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return response.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p>Loading posts...</p>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        <p>Error: {error.message}</p>
        <button 
          onClick={() => refetch()}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2>Posts from JSONPlaceholder API</h2>
        
        {/* Refetch button to demonstrate manual data updating */}
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            backgroundColor: isFetching ? '#6c757d' : '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer'
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
      </div>

      {/* Display cache status */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '10px', 
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <strong>Query Status:</strong> {isFetching ? 'Fetching...' : 'Cached'} | 
        <strong> Total Posts:</strong> {posts?.length || 0}
      </div>

      {/* Display posts */}
      <div style={{ 
        display: 'grid', 
        gap: '15px',
        maxHeight: '600px',
        overflowY: 'auto'
      }}>
        {posts?.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ 
              margin: '0 0 10px 0', 
              color: '#495057',
              fontSize: '18px' 
            }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ 
              margin: '0', 
              color: '#6c757d',
              lineHeight: '1.5' 
            }}>
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;