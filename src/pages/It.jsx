import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import LangSwitch from "../components/LangSwitch.jsx";
import AccentToggle from "../components/AccentToggle.jsx";

const SITE = typeof window !== "undefined" ? window.location.origin : "";

export default function It() {
  const rMain = useRevealOnScroll({ threshold: 0.15 });

  return (
    <>
      <title>TalkMates | Circolo universitario alla Doshisha University</title>
      <meta
        name="description"
        content="Circolo studentesco a Kyoto. Attività, eventi e come partecipare."
      />
      <link rel="canonical" href={`${SITE}/it`} />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="ja" />
      <link rel="alternate" href={`${SITE}/en`} hreflang="en" />
      <link rel="alternate" href={`${SITE}/fr`} hreflang="fr" />
      <link rel="alternate" href={`${SITE}/it`} hreflang="it" />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="x-default" />

      <nav className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 0" }}>
        <a href="#top" className="button">TalkMates</a>
        <div style={{ display:"flex", gap:12, alignItems:"center" }}>
          <LangSwitch />
          <AccentToggle />
        </div>
      </nav>

      <main id="top" className="section">
        <div className="container" data-reveal ref={rMain}>
          <h1 className="h1">TalkMates — Circolo universitario alla Doshisha University</h1>
          <p className="p" style={{ maxWidth:720 }}>
            Club studentesco con sede a Kyoto. Attività, eventi e come partecipare.
          </p>
          <div style={{ marginTop:24, display:"flex", gap:12, flexWrap:"wrap" }}>
            <a className="button" href="/ja#contact">Contatto</a>
          </div>
        </div>
      </main>
    </>
  );
}
