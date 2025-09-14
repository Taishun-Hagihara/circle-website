import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Ja from "./pages/Ja.jsx";
import En from "./pages/En.jsx";
import Fr from "./pages/Fr.jsx";
import It from "./pages/It.jsx";

// ルート(/)に来た時、localStorage.lang または ブラウザ言語で最適言語へ送る
function HomeRedirect() {
  const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const supported = new Set(["ja", "en", "fr", "it"]);
  let lang = "ja";

  if (saved && supported.has(saved)) {
    lang = saved;
  } else if (typeof navigator !== "undefined") {
    const n = navigator.language?.toLowerCase() || "";
    if (n.startsWith("ja")) lang = "ja";
    else if (n.startsWith("fr")) lang = "fr";
    else if (n.startsWith("it")) lang = "it";
    else lang = "en";
  }

  return <Navigate to={`/${lang}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/ja" element={<Ja />} />
      <Route path="/en" element={<En />} />
      <Route path="/fr" element={<Fr />} />
      <Route path="/it" element={<It />} />
      {/* 想定外のURLは日本語へ */}
      <Route path="*" element={<Navigate to="/ja" replace />} />
    </Routes>
  );
}
