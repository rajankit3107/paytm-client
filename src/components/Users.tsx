import { useState } from "react";
import { Button } from "./Button";

interface User {
  firstName: string;
  lastName: string;
  _id: number;
}

interface UserProps {
  user: User;
}

export const Users = () => {
  // Replace with backend call
  const allUsers: User[] = [
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
    {
      firstName: "John",
      lastName: "Doe",
      _id: 2,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      _id: 3,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = allUsers.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="font-bold text-2xl text-gray-800">Users</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
        />
      </div>
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }: UserProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-4">
        <div className="rounded-full h-12 w-12 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xl font-semibold text-gray-700 shadow-sm">
          {user.firstName[0]}
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </div>
          <div className="text-sm text-gray-500">User ID: {user._id}</div>
        </div>
      </div>

      <div className="flex items-center">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}
