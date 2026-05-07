import { ImageResponse } from "next/og";

export const alt = "Calgary Prep Center - Amazon FBA Prep, FBM and 3PL Storage";
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
          background: "#f9f8f4",
          color: "#1a2426",
          padding: 64,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1a2426",
                color: "#ff6b35",
                fontSize: 28,
                fontWeight: 800,
                borderRadius: 8,
              }}
            >
              CP
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, textTransform: "uppercase" }}>
              Calgary Prep Center
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#4a5456" }}>Calgary, Alberta</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 0.95,
              fontWeight: 900,
              textTransform: "uppercase",
            }}
          >
            Amazon FBA Prep,
            <span>FBM & 3PL Storage</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "#4a5456", width: 860 }}>
            Receiving, FNSKU labeling, bundling, fulfillment, and storage for e-commerce sellers.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, fontSize: 24, fontWeight: 700 }}>
          {["24h Turnaround", "FBA Compliance", "Western Canada"].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 22px",
                border: "2px solid #1a2426",
                borderRadius: 8,
                background: item === "FBA Compliance" ? "#ff6b35" : "transparent",
                color: item === "FBA Compliance" ? "#f9f8f4" : "#1a2426",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
