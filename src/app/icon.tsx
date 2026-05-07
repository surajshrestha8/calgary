import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a2426",
          color: "#ff6b35",
          fontSize: 14,
          fontWeight: 900,
          fontFamily: "Arial, sans-serif",
        }}
      >
        CP
      </div>
    ),
    size,
  );
}
