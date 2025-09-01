import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";

interface UserData {
  firstName: string;
  lastName: string;
  email?: string;
}

export const Appbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Get user data from localStorage with key "user"
    const userDataString = localStorage.getItem("user");

    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        if (
          parsedUserData &&
          (parsedUserData.firstName || parsedUserData.email)
        ) {
          setUserData(parsedUserData);
          console.log("Found user data:", parsedUserData);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    // If no user data found in "user" key, try to get from token
    if (!userDataString) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Decode JWT token to get user info (if it's a JWT)
          const payload = JSON.parse(atob(token.split(".")[1]));
          if (payload && (payload.firstName || payload.email)) {
            const userDataFromToken = {
              firstName: payload.firstName || payload.name || "",
              lastName: payload.lastName || "",
              email: payload.email || "",
            };
            setUserData(userDataFromToken);
            console.log("Found user data in token:", userDataFromToken);
          }
        } catch {
          console.log("Token is not a JWT or doesn't contain user data");
        }
      }
    }
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate("/signin");
  };

  return (
    <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <div className="font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            PayTM App
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-gray-600 font-medium hover:text-gray-800 transition-colors duration-300">
            Hello, {userData?.firstName || "User"}
          </div>
          <div className="relative group">
            <div
              className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group-hover:from-gray-400 group-hover:to-gray-500"
              onClick={handleLogout}
              title="Click to logout"
            >
              <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-800 transition-colors duration-300">
                {userData?.firstName?.[0]?.toUpperCase() || "U"}
              </span>
            </div>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
