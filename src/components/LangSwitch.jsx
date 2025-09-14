import React from "react";
import { Link, useLocation } from "react-router-dom";

const LANGS = [
  { id: "ja", label: "JA" },
  { id: "en", label: "EN" },
  { id: "fr", label: "FR" },
  { id: "it", label: "IT" },
];

export default function LangSwitch() {
  const { pathname, hash } = useLocation();
  const current = (pathname.split("/")[1] || "ja").toLowerCase();
  const anchor = hash || "";

  return (
    <div role="group" aria-label="Language" style={{ display:"inline-flex", gap:8 }}>
      {LANGS.map(l => {
        const active = current === l.id;
        return (
          <Link
            key={l.id}
            to={`/${l.id}${anchor}`}
            onClick={() => localStorage.setItem("lang", l.id)}
            aria-current={active ? "page" : undefined}
            className="chip"
            style={{
              fontWeight:700, letterSpacing:1,
              borderColor: active ? "var(--accent)" : "rgba(255,255,255,.14)",
              color: active ? "var(--accent)" : "inherit",
              textDecoration:"none"
            }}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
