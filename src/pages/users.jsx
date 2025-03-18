import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div 
            key={user.id} 
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{user.name}</h2>
            <p className="text-gray-700"><b>Username:</b> {user.username}</p>
            <p className="text-gray-700"><b>Email:</b> {user.email}</p>
            <p className="text-gray-700"><b>Address:</b> {user.address.street}, {user.address.city}</p>
            <p className="text-gray-700"><b>Suite: </b> {user.address.suite} </p>
            <p className="text-gray-700"><b>Zipcode:</b> {user.address.zipcode}</p>
            <p className="text-gray-700"><b>Geo:</b> {user.address.geo.lat}, {user.address.geo.lng}</p>
            <p className="text-gray-700"><b>Phone:</b> {user.phone}</p>
            <p className="text-gray-700">
              <b>Website:</b>
              <a 
                href={`https://${user.website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline ml-1"
              >
                {user.website}
              </a>
            </p>
            <p className="text-gray-700"><b>Company:</b> {user.company.name}</p> 
            <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
            <p className="text-gray-700"><b>Business:</b> {user.company.bs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;