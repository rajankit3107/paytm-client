interface BalanceProps {
  value: number;
}

export const Balance = ({ value }: BalanceProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between group">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            Your Balance
          </h2>
          <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
            Available for transactions
          </p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:from-green-500 group-hover:to-green-700">
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-baseline space-x-3">
          <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            ₹{value.toLocaleString()}
          </span>
          <span className="text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
            Available
          </span>
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            Account is active
          </span>
        </div>
      </div>
    </div>
  );
};
