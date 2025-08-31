interface SubHeadingProps {
  label: string;
}

export function SubHeading({ label }: SubHeadingProps) {
  return <p className="text-gray-600 text-sm leading-relaxed">{label}</p>;
}
