import { ImageResponse } from "next/og";

export const alt = "Dr. Zara Iqbal Khan — Dermatologist & Aesthetic Physician, Riyadh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A140F",
          padding: "72px 80px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(201,169,106,0.5) 0%, rgba(201,169,106,0) 70%)"
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#DCC7A6",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase"
          }}
        >
          <span>Riyadh · Saudi Arabia</span>
          <span>Dermatology</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#F8F4EC",
              fontSize: 86,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontFamily: "Georgia, serif",
              maxWidth: 900
            }}
          >
            Where Science Meets the Art of Skin.
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#C9A96A",
              fontSize: 26,
              letterSpacing: 2
            }}
          >
            Dr. Zara Iqbal Khan — Dermatologist &amp; Aesthetic Physician
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(248,244,236,0.18)",
            paddingTop: 26,
            color: "rgba(248,244,236,0.55)",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase"
          }}
        >
          <span>drzara-iqbalkhan.com</span>
          <span>Personal brand — Riyadh</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
