import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "./Button";
import { BACKEND_URL } from "../config";

interface User {
  firstName: string;
  lastName: string;
  _id: number;
}

interface UserProps {
  user: User;
  onSendMoney: () => void;
}

export const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication token not found. Please login again.");
        return;
      }

      const response = await axios.get(`${BACKEND_URL}/api/v1/user/bulk`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(response.data.users);
    } catch (err) {
      console.error("Error fetching users:", err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError("Authentication failed. Please login again.");
          navigate("/signin");
        } else {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Failed to fetch users"
          );
        }
      } else {
        setError("Failed to fetch users");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSendMoney = (user: User) => {
    navigate("/send-money", {
      state: {
        recipientName: `${user.firstName} ${user.lastName}`,
        recipientInitial: user.firstName[0],
      },
    });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="font-bold text-2xl text-gray-800">Users</div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading users...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="font-bold text-2xl text-gray-800">Users</div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-red-600 font-medium mb-2">
            Error loading users
          </div>
          <div className="text-red-500 text-sm mb-4">{error}</div>
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="font-bold text-2xl text-gray-800 hover:text-gray-900 transition-colors duration-300">
        Users ({users.length})
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

      {filteredUsers.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          {searchTerm
            ? "No users found matching your search."
            : "No users available."}
        </div>
      ) : (
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
      )}
    </div>
  );
};

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
