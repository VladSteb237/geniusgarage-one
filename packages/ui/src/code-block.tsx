// TODO: Define CodeBlockProps interface with:
//   - code: string
//   - language?: string (optional, default 'javascript')

// TODO: Export CodeBlock function component that:
//   - Takes code and language props (destructure with default)
//   - Returns a div with dark background (#1e1e1e)
//   - Shows language label at top with opacity 0.6
//   - Renders code in a <pre><code> block
//   - Uses monospace font and allows horizontal scroll

// Define CodeBlockProps interface
export interface CodeBlockProps {
  code: string;
  language?: string; // optional, default 'javascript'
}

// Export CodeBlock function component
export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        padding: "1rem",
        borderRadius: "0.5rem",
        overflow: "auto",
        fontFamily: "monospace",
        fontSize: "0.9rem",
      }}>
      {/* Language label */}
      <div style={{ opacity: 0.6, marginBottom: "0.5rem", fontSize: "0.8rem" }}>
        {language}
      </div>

      {/* Code block */}
      <pre style={{ margin: 0 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
