"use client";

import { useState } from "react";
import { Button } from "../../../packages/ui/src/button";
import { SnippetCard } from "../../../packages/ui/src/snippet-card";
import { formatDate } from "../../../packages/utils/src/index";
import Link from "next/dist/client/link";

interface Snippet {
  id: number;
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: Date; // Add this field change to Date
}

const initialSnippets: Snippet[] = [
  {
    id: 1,
    title: "Array Reduce Pattern",
    language: "javascript",
    code: "const sum = arr.reduce((acc, n) => acc + n, 0)",
    tags: ["javascript", "array", "functional"],
    createdAt: new Date("2024-01-15"), // Date object
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
    createdAt: new Date("2024-02-20"), // Date object
  },
  {
    id: 3,
    title: "Promise.all Pattern",
    language: "javascript",
    code: "const results = await Promise.all(promises.map(p => p()))",
    tags: ["javascript", "async", "promises"],
    createdAt: new Date("2024-03-10"), // Date object
  },
];

// TODO: Create mockSnippets array with 3 snippets:
// 1. Array Reduce Pattern (javascript, reduce code, tags: javascript, array, functional)
// 2. React useEffect Cleanup (typescript, useEffect cleanup code, tags: react, hooks, typescript)
// 3. Promise.all Pattern (javascript, Promise.all code, tags: javascript, async, promises)

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>(initialSnippets);
  const [showModal, setShowModal] = useState(false);
  const [newSnippet, setNewSnippet] = useState({
    title: "",
    language: "javascript",
    code: "",
    tags: "",
  });

  const handleCreateSnippet = () => {
    // Validate required fields
    if (!newSnippet.title || !newSnippet.code) return;
    // Create snippet object
    const snippet: Snippet = {
      id: Date.now(),
      title: newSnippet.title,
      language: newSnippet.language,
      code: newSnippet.code,
      tags: newSnippet.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      createdAt: new Date(), // Now a Date object
    };
    // Add snippet to snippets array
    setSnippets([...snippets, snippet]);
    // Reset form
    setNewSnippet({ title: "", language: "javascript", code: "", tags: "" });
    // Close modal
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* TODO: Add header div with flex layout */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Snippets</h1>
          <Button>
            <Link href="http://localhost:3000">+ Go to App Project</Link>
          </Button>
          <Button onClick={() => setShowModal(true)}>+ New Snippet</Button>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 items-center justify-center z-[1000]">
            <div className="bg-white p-8 rounded-lg w-[90%] max-w-[600px]">
              <h2 className="mt-0">Create a New Snippet</h2>
              {/* Title Input */}
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Title</label>
                <input
                  type="text"
                  value={newSnippet.title}
                  placeholder="My awesome snippet"
                  className=" w-full p-2 border rounded border-[#ddd]"
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, title: e.target.value })
                  }
                />
              </div>
              {/* Language Select */}
              <div className="mb-8">
                <label className="block mb-2 font-semibold">Language</label>
                <select
                  value={newSnippet.language}
                  className="w-full p-2 border rounded border-[#ddd]"
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, language: e.target.value })
                  }>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                </select>
              </div>
              {/* Code Textarea */}
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Code</label>
                <textarea
                  value={newSnippet.code}
                  placeholder="console.log('Hello world')"
                  className="w-full p-2 border rounded border-[#ddd] font-mono min-h-[150px]"
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, code: e.target.value })
                  }
                />
              </div>
              {/* Tags Input */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={newSnippet.tags}
                  placeholder="javascript, array, functional"
                  className=" w-full p-2 border rounded border-[#ddd]"
                  onChange={(e) =>
                    setNewSnippet({ ...newSnippet, tags: e.target.value })
                  }
                />
              </div>
              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowModal(false);
                    setNewSnippet({
                      title: "",
                      language: "javascript",
                      code: "",
                      tags: "",
                    });
                  }}>
                  Cancel
                </Button>
                <Button onClick={handleCreateSnippet}>Create Snippet</Button>
              </div>
            </div>
          </div>
        )}
        {/* TODO: Add grid div that maps over mockSnippets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              {...snippet}
              createdAt={formatDate(snippet.createdAt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
