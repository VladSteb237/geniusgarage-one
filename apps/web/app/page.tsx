import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "system-ui",
        maxWidth: "800px",
        margin: "auto",
      }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "2rem",
        }}>
        <Link
          href="/features"
          style={{
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}>
          Features
        </Link>
      </nav>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          🧠 GeniusGarage
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#666", marginBottom: "2rem" }}>
          Manage and share your code snippets
        </p>

        {/* Inline Button - we'll extract this to a shared package in Section 1 */}
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: "600",
            backgroundColor: "#0070f3",
            color: "white",
          }}>
          Get Started
        </button>

        <p style={{ color: "#666", marginTop: "3rem", fontSize: "0.875rem" }}>
          This is the starter project. You'll build out the full platform as you
          progress through the course.
        </p>
      </div>
    </main>
  );
}
