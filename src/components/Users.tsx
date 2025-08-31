import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Replace with backend call
  const allUsers: User[] = [
    {
      firstName: "Ankit",
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

  const handleSendMoney = (user: User) => {
    navigate("/send-money", {
      state: {
        recipientName: `${user.firstName} ${user.lastName}`,
        recipientInitial: user.firstName[0],
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="font-bold text-2xl text-gray-800 hover:text-gray-900 transition-colors duration-300">
        Users
      </div>
      <div className="relative group">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 group-hover:border-gray-400"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-4">
        {filteredUsers.map((user, index) => (
          <div
            key={user._id}
            className="transform transition-all duration-300 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <User user={user} onSendMoney={() => handleSendMoney(user)} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface UserProps {
  user: User;
  onSendMoney: () => void;
}

function User({ user, onSendMoney }: UserProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
      <div className="flex items-center space-x-4">
        <div className="rounded-full h-12 w-12 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xl font-semibold text-gray-700 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 group-hover:from-gray-400 group-hover:to-gray-500">
          {user.firstName[0]}
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Button label={"Send Money"} onClick={onSendMoney} />
      </div>
    </div>
  );
}
