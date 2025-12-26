import Link from "next/link";

export default function Features() {
  return (
    <main
      style={{
        padding: "4rem 2rem",
        fontFamily: "system-ui",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
      {/* TODO: Add navigation bar with logo and links */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "4rem",
        }}>
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#000",
          }}>
          🧠 GeniusGarage
        </Link>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link
            href="/features"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}>
            Features
          </Link>
        </div>
      </nav>
      {/* TODO: Add page title and description */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}>
        Features
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "3rem",
          textAlign: "center",
        }}>
        Everything you need to manage your code snippets
      </p>
      {/* TODO: Add feature cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            ⚡ Fast Search
          </h3>
          <p style={{ color: "#666" }}>
            Find your snippets instantly with powerful full-text search and
            filtering by tags
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            📁 Organized
          </h3>
          <p style={{ color: "#666" }}>
            Keep your code organized with tags, folders, and collections
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            🔗 Shareable
          </h3>
          <p style={{ color: "#666" }}>
            Share snippets with your team or make them public for the community
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            🎨 Syntax Highlighting
          </h3>
          <p style={{ color: "#666" }}>
            Beautiful syntax highlighting for 100+ programming languages
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            📋 One-Click Copy
          </h3>
          <p style={{ color: "#666" }}>
            Copy snippets to your clipboard with a single click
          </p>
        </div>
        <div
          style={{
            padding: "2rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
          }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}>
            🔐 Private & Secure
          </h3>
          <p style={{ color: "#666" }}>
            Your private snippets stay private with enterprise-grade security
          </p>
        </div>
      </div>
    </main>
  );
}
