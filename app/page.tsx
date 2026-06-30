"use client";

import { useState, useMemo } from "react";
import { questions } from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import TopicFilter from "./components/TopicFilter";
import SearchBar from "./components/SearchBar";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get unique topics
  const topics = useMemo(() => {
    const topicSet = new Set(questions.map((q) => q.topic));
    return ["All", ...Array.from(topicSet)];
  }, []);

  // Filter questions
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
    <main className="min-h-screen bg-black text-white">
      {/* Glow Effects */}
      <div className="glow-blue -top-75 -left-75" />
      <div className="glow-purple -bottom-75 -right-75" />
      <div className="glow-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[40vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.35em] text-pink-300 mb-4 text-sm font-semibold">
            9618 Paper 2 Revision
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-4">
            <span className="text-gradient">CS Question Bank</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            165 exam-style questions with model answers from Cambridge past papers
          </p>
          <p className="text-zinc-500 text-sm mt-2">
            {questions.length} questions • {topics.length - 1} topics
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <TopicFilter
            topics={topics}
            selectedTopic={selectedTopic}
            onSelect={setSelectedTopic}
          />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <p className="text-zinc-500 text-sm mt-3">
          Showing {filteredQuestions.length} questions
        </p>
      </section>

      {/* Questions Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          {filteredQuestions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
            >
              <QuestionCard question={q} />
            </motion.div>
          ))}
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">
                No questions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-zinc-500 text-sm">
        <p>Geek Craft Labs • Cambridge 9618 Paper 2</p>
      </footer>
    </main>
  );
}