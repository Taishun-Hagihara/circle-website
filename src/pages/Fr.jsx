import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import LangSwitch from "../components/LangSwitch.jsx";
import AccentToggle from "../components/AccentToggle.jsx";

const SITE = typeof window !== "undefined" ? window.location.origin : "";

export default function Fr() {
  const rMain = useRevealOnScroll({ threshold: 0.15 });

  return (
    <>
      <title>TalkMates | Cercle universitaire à l’Université Doshisha</title>
      <meta
        name="description"
        content="Cercle d’étudiants à l’Université Doshisha (Kyoto). Activités, événements et adhésion."
      />
      <link rel="canonical" href={`${SITE}/fr`} />
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
          <h1 className="h1">TalkMates — Cercle universitaire à l’Université Doshisha</h1>
          <p className="p" style={{ maxWidth:720 }}>
            Cercle d’étudiants basé à Kyoto. Activités, événements et modalités d’adhésion.
          </p>
          <div style={{ marginTop:24, display:"flex", gap:12, flexWrap:"wrap" }}>
            <a className="button" href="/ja#contact">Nous contacter</a>
          </div>
        </div>
      </main>
    </>
  );
}
