import React, { useState } from "react";

function UserList() {
  const [user, setUser] = useState({ name: "", surname: "", age: "" });
  const [users, setUsers] = useState([]);

  const addUser = () => {
    if (user.name.trim() && user.surname.trim() && user.age.trim()) {
      setUsers([...users, user]);
      setUser({ name: "", surname: "", age: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Foydalanuvchi Qo‘shish</h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="border p-2 rounded-xl w-full mb-2"
        placeholder="Ism..."
      />
      <input
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        className="border p-2 rounded-xl w-full mb-2"
        placeholder="Familiya..."
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border p-2 rounded-xl w-full mb-2"
        placeholder="Yosh..."
      />
      <button
        onClick={addUser}
        className="w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Qo'shish
      </button>
      <ul className="mt-4 space-y-2">
        {users.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-xl flex justify-between items-center"
          >
            <span>
              {item.name} {item.surname} - {item.age} yosh
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
