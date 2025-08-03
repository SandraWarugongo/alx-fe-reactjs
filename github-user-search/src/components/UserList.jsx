const UserList = ({ users }) => {
  if (!users.length) {
    return <p className="text-center mt-4 text-gray-600">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded shadow p-4 flex items-center gap-4">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-lg font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
