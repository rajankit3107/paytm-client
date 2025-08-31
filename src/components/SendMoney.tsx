import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";

interface SendMoneyProps {
  recipientName?: string;
  recipientInitial?: string;
  onSend?: (amount: number) => void;
}

export const SendMoney = ({
  recipientName = "Friend's Name",
  recipientInitial = "A",
  onSend,
}: SendMoneyProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  // Get user data from navigation state
  const userData = location.state as {
    recipientName?: string;
    recipientInitial?: string;
  } | null;
  const finalRecipientName = userData?.recipientName || recipientName;
  const finalRecipientInitial = userData?.recipientInitial || recipientInitial;

  const handleSend = () => {
    const numAmount = parseFloat(amount);
    if (numAmount > 0 && onSend) {
      onSend(numAmount);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main content */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-8 border border-white/30">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">Send Money</h2>
            <p className="text-gray-600">Transfer funds securely</p>
          </div>

          {/* Recipient Info */}
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-semibold text-white">
                {finalRecipientInitial}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {finalRecipientName}
              </h3>
              <p className="text-sm text-gray-600">Recipient</p>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 block">
                Amount (in ₹)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400 font-medium">₹</span>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <Button label="Initiate Transfer" onClick={handleSend} />
          </div>

          {/* Security Note */}
          <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm font-medium text-blue-800">
                Secure Transfer
              </span>
            </div>
            <p className="text-xs text-blue-600">
              Your transaction is protected with bank-level security
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-medium underline"
            >
              ← Back to Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
