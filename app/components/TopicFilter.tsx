"use client";

interface TopicFilterProps {
  topics: string[];
  selectedTopic: string;
  onSelect: (topic: string) => void;
}

export default function TopicFilter({
  topics,
  selectedTopic,
  onSelect,
}: TopicFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => onSelect(topic)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTopic === topic
              ? "bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}