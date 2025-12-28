// TODO: Import Card from './card'
// TODO: Import CodeBlock from './code-block'
// TODO: Define SnippetCardProps interface with:
//   - title: string
//   - language: string
//   - code: string
//   - tags: string[]
//   - createdAt: string

// TODO: Export SnippetCard function component that:
//   - Wraps everything in a Card component
//   - Shows title as h3
//   - Shows createdAt below title
//   - Renders CodeBlock with code and language
//   - Maps over tags and renders each as a styled span
// Import Card and CodeBlock components
import { Card } from "./card";
import { CodeBlock } from "./code-block";

// Define SnippetCardProps interface
export interface SnippetCardProps {
  title: string;
  language: string;
  code: string;
  tags: string[];
  createdAt: string;
}

// Export SnippetCard function component
export function SnippetCard({
  title,
  language,
  code,
  tags,
  createdAt,
}: SnippetCardProps) {
  return (
    <Card>
      <div style={{ marginBottom: "1rem" }}>
        {/* Title */}
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
        {/* CreatedAt */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            color: "#666",
            fontSize: "0.875rem",
          }}>
          <span>{createdAt}</span>
        </div>
      </div>
      {/* CodeBlock */}
      <CodeBlock code={code} language={language} />
      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.25rem 0.5rem",
              borderRadius: "1rem",
              backgroundColor: "#f0f0f0",
              fontSize: "0.875rem",
            }}>
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );
}
