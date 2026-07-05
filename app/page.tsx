"use client";

import { useState, useMemo, useEffect } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import TopicFilter from "./components/TopicFilter";
import SearchBar from "./components/SearchBar";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const topics = useMemo(() => {
    const topicSet = new Set(questions.map((q) => q.topic));
    return ["All", ...Array.from(topicSet)];
  }, []);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesTopic = selectedTopic === "All" || q.topic === selectedTopic;
      const matchesSearch =
        searchQuery === "" ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.paperRef.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [selectedTopic, searchQuery]);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden w-full">
      {/* Glow Effects */}
      <div className="glow-blue -top-75 -left-75" />
      <div className="glow-purple -bottom-75 -right-75" />
      <div className="glow-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-[0.35em] text-pink-300 mb-2 text-xs font-semibold">
            9618 Paper 2 Revision
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-2">
            <span className="text-gradient">CS Question Bank</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg px-2">
            165 exam-style questions with model answers from Cambridge past papers
          </p>
          <p className="text-zinc-500 text-xs mt-2">
            {questions.length} questions • {topics.length - 1} topics
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-6 w-full">
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between w-full">
          <TopicFilter
            topics={topics}
            selectedTopic={selectedTopic}
            onSelect={setSelectedTopic}
          />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <p className="text-zinc-500 text-xs mt-2">
          Showing {filteredQuestions.length} questions
        </p>
      </section>

      {/* Questions Section - Optimized for mobile */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-12 w-full">
        <div className="space-y-4">
          {filteredQuestions.map((q, index) => (
            // On mobile: no animation, instant render
            // On desktop: subtle animation
            <div
              key={q.id}
              className={!isMobile ? "animate-fade-in-up" : ""}
              style={!isMobile ? { animationDelay: `${Math.min(index * 0.05, 0.5)}s` } : {}}
            >
              <QuestionCard question={q} />
            </div>
          ))}
          {filteredQuestions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-zinc-400 text-base">
                No questions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-4 text-center text-zinc-500 text-xs px-4">
        <p>Geek Craft Labs • Cambridge 9618 Paper 2</p>
      </footer>
    </main>
  );
}