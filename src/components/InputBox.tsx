interface InputBoxProps {
  label: string;
  placeholder: string;
}

export function InputBox({ label, placeholder }: InputBoxProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 block">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
      />
    </div>
  );
}
