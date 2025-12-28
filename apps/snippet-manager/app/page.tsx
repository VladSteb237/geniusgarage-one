"use client";

import { Button } from "../../../packages/ui/src/button";
import { Card } from "../../../packages/ui/src/card";
import { SnippetCard } from "../../../packages/ui/src/snippet-card";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string; // Add this field
}

const mockSnippets: Snippet[] = [
  {
    id: 1,
    title: "Array Reduce Pattern",
    language: "javascript",
    code: "const sum = arr.reduce((acc, n) => acc + n, 0)",
    tags: ["javascript", "array", "functional"],
    createdAt: "Jan 15, 2026", // Add this
  },
  {
    id: 2,
    title: "React useEffect Cleanup",
    language: "typescript",
    code: `useEffect(() => {
  const timer = setTimeout(() => {}, 1000)
  return () => clearTimeout(timer)
}, [])`,
    tags: ["react", "hooks", "typescript"],
    createdAt: "Feb 20, 2026", // Add this
  },
  {
    id: 3,
    title: "Promise.all Pattern",
    language: "javascript",
    code: "const results = await Promise.all(promises.map(p => p()))",
    tags: ["javascript", "async", "promises"],
    createdAt: "Mar 10, 2026", // Add this
  },
];

// TODO: Create mockSnippets array with 3 snippets:
// 1. Array Reduce Pattern (javascript, reduce code, tags: javascript, array, functional)
// 2. React useEffect Cleanup (typescript, useEffect cleanup code, tags: react, hooks, typescript)
// 3. Promise.all Pattern (javascript, Promise.all code, tags: javascript, async, promises)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* TODO: Add header div with flex layout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button onClick={() => console.log("Create snippet")}>
            + New Snippet
          </Button>
        </div>

        {/* TODO: Add grid div that maps over mockSnippets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockSnippets.map((snippet) => (
            <SnippetCard key={snippet.id} {...snippet} />
          ))}
        </div>
      </div>
    </div>
  );
}
