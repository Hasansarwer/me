import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Hasan Sarwer — Builder & Open-Source Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [photoData, fontData] = await Promise.all([
    readFile(join(process.cwd(), "public/images/Hasan_Sarwer.jpg")),
    fetch(
      "https://fonts.bunny.net/inter/files/inter-latin-700-normal.woff"
    ).then((r) => r.arrayBuffer()),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1120",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingRight: 60,
          }}
        >
          <div
            style={{
              width: 56,
              height: 4,
              background: "#3b82f6",
              marginBottom: 36,
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            Hasan Sarwer
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              marginBottom: 20,
            }}
          >
            Builder & Open-Source Creator · PhD Mathematics
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#475569",
              marginBottom: 44,
            }}
          >
            salt-theme-gen · react-native-salt · DentistLeads
          </div>
          <div style={{ fontSize: 22, color: "#3b82f6" }}>
            hasansarwer.com
          </div>
        </div>

        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundImage: `url(${photoSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            border: "4px solid #1e293b",
            flexShrink: 0,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
