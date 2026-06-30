"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Use Link instead of <a> */}
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-blue-400">CS</span> Revision
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition text-zinc-400"
            >
              Topics
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition text-zinc-400"
            >
              Practice
            </Link>
          </div>

          {/* Mobile Menu - using details/summary (no state needed) */}
          <details className="md:hidden">
            <summary className="w-11 h-11 flex flex-col justify-center items-center gap-1.5 cursor-pointer list-none">
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
              <span className="w-6 h-0.5 bg-white rounded-full"></span>
            </summary>
            <div className="absolute top-16 right-4 left-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
              <Link href="/" className="hover:text-blue-400 transition py-2">
                Home
              </Link>
              <Link href="#" className="hover:text-blue-400 transition py-2">
                Topics
              </Link>
              <Link href="#" className="hover:text-blue-400 transition py-2">
                Practice
              </Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}