import React from "react";

const About = () => {
  return (
    <main className="min-h-screen p-8">
      <div className="mt-20 mb-16 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          About This Project
        </h2>
        <p className="text-center max-w-2xl mx-auto">
          This is a sample About page for the GeniusGarage project. Here you can
          provide information about the project, its goals, and the team behind
          it.
        </p>
      </div>
      <div>
        <h1 className="bg-red-500 text-4xl font-bold text-center">
          About Page
        </h1>
        <h1 className="text-red-500 bg-yellow-200 text-4xl">TEST COLOR</h1>
        <div
          style={{
            background: "red",
            color: "white",
            padding: 40,
            marginBottom: 20,
          }}>
          INLINE STYLE WORKS
        </div>
        <div className="bg-red-500 text-white p-10 text-5xl">
          IF YOU SEE RED — TAILWIND WORKS
        </div>
      </div>
    </main>
  );
};

export default About;
