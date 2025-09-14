// src/components/Contact.jsx
import React from "react";
import qr from "../assets/talkmatesQR.jpg"; // そのまま使う

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 24 }}
      >
        <div>
          <h2 className="h2">Contact</h2>
          <p className="p">Instagramのフォロー、もしくはDMでお問い合わせください。</p>
          <a
            className="button"
            href="https://instagram.com/talkmates_2025" // ← あなたのIDに変更
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram を開く
          </a>
        </div>

        {/* ★ 正方形ラッパの中に「contain」で収める：歪み防止 */}
        <div style={{ display: "grid", placeItems: "center" }}>
          <div
            style={{
              width: "min(260px, 80vw)",
              aspectRatio: "1 / 1",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "var(--shadow-md)",
              display: "grid",
              placeItems: "center",
              padding: 12, // Quiet Zoneを少し確保
            }}
          >
            <img
              src={qr}
              alt="InstagramのQRコード"
              loading="lazy"
              decoding="async"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",    // ← 重要：歪ませない
                imageRendering: "crisp-edges", // or "pixelated"（小さい表示でエッジを保つ）
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
