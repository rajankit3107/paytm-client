import axios from "axios";
import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance();
  }, []);
  const getBalance = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${BACKEND_URL}/api/v1/account/balance`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBalance(response.data.balance);
    } catch (error) {
      console.error(`Error fetching balance`, error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <Appbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="space-y-8">
          {/* Welcome Section with smooth animation */}
          <div className="text-center space-y-3 animate-fade-in">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome to PayTM
            </h1>
            <p className="text-gray-600 text-lg">
              Manage your money with ease and elegance
            </p>
          </div>

          {/* Balance Card with smooth hover effects */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out animate-slide-up">
            <Balance value={balance} />
          </div>

          {/* Users Section with smooth hover effects */}
          <div
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 ease-out animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};
