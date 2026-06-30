"use client";

import { useState } from "react";
import { type Question } from "../data/questions";

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="glass-card p-6 hover:border-blue-500/50 transition-all duration-300">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="tag tag-blue">Q{question.id}</span>
        <span className="tag tag-purple">{question.paperRef}</span>
        <span className="tag tag-pink">{question.marks} marks</span>
        <span className="text-zinc-500 text-sm ml-auto">{question.module}</span>
      </div>

      {/* Topic */}
      <p className="text-zinc-400 text-sm mb-3">{question.topic}</p>

      {/* Question */}
      <div className="mb-4">
        <p className="text-white whitespace-pre-wrap leading-relaxed">
          {question.question}
        </p>
      </div>

      {/* Answer Section */}
      <div>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="px-5 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-sm font-medium transition-all duration-300"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        {showAnswer && (
          <div className="mt-4 space-y-3">
            {/* Model Answer */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-green-300 font-semibold text-sm mb-2">
                ✓ Model Answer:
              </p>
              <p className="text-zinc-200 whitespace-pre-wrap font-mono text-sm">
                {question.modelAnswer}
              </p>
            </div>

            {/* Mark Allocation */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-yellow-300 font-semibold text-sm mb-2">
                📊 Mark Allocation:
              </p>
              <p className="text-zinc-300 whitespace-pre-wrap text-sm">
                {question.markAllocation}
              </p>
            </div>

            {/* Explanation */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-purple-300 font-semibold text-sm mb-2">
                💡 Explanation:
              </p>
              <p className="text-zinc-300 whitespace-pre-wrap text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}