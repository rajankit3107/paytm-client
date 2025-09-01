interface BalanceProps {
  value: number;
  loading?: boolean;
  error?: string | null;
}

export const Balance = ({
  value,
  loading = false,
  error = null,
}: BalanceProps) => {
  if (error) {
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
          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
          <div className="text-center space-y-3">
            <p className="text-red-600 font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          {loading ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <span className="text-gray-600 text-sm">Updating balance...</span>
            </div>
          ) : (
            <>
              <span className="text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                ₹{value.toLocaleString()}
              </span>
              <span className="text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
                Available
              </span>
            </>
          )}
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full ${
              loading ? "bg-yellow-500 animate-pulse" : "bg-green-500"
            }`}
          ></div>
          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {loading ? "Updating..." : "Account is active"}
          </span>
        </div>
      </div>
    </div>
  );
};
