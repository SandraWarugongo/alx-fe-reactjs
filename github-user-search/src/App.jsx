

import { useState } from 'react';
import './index.css';
import SearchForm from './components/SearchForm';
import UserList from './components/UserList';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters) => {
    setLoading(true);
    try {
      const results = await fetchUserData(filters);
      setUsers(results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 p-6">GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <p className="text-center text-gray-500 mt-6">Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}

export default App;
