interface HeadingProps {
  label: string;
}

export function Heading({ label }: HeadingProps) {
  return (
    <h1 className="font-bold text-3xl text-gray-800 tracking-tight">{label}</h1>
  );
}
