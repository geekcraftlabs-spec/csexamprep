"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full md:w-64">
      <input
        type="text"
        placeholder="Search questions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 transition-all duration-300"
        suppressHydrationWarning
      />
    </div>
  );
}