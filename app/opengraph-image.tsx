
import { ImageResponse } from "next/og";

export const alt = "Ghazi - Information Systems Student Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#101510",
          color: "#F1F5F0",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#A3E635",
          }}
        >
          <span>GZ / PORTFOLIO</span>
          <span>2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              fontWeight: 800,
              letterSpacing: "-6px",
            }}
          >
            GHAZI
          </div>

          <div
            style={{
              fontSize: 38,
              color: "#A3E635",
              marginTop: 12,
            }}
          >
            Information Systems Student
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#AAB5AA",
              marginTop: 24,
            }}
          >
            Exploring technology, software development & IT solutions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #39443D",
            paddingTop: 24,
            fontSize: 20,
            color: "#A3E635",
          }}
        >
          <span>PERSONAL PORTFOLIO</span>
          <span>gz-portofolio.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}