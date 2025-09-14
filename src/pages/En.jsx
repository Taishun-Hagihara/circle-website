import React from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import LangSwitch from "../components/LangSwitch.jsx";
import AccentToggle from "../components/AccentToggle.jsx";

const SITE = typeof window !== "undefined" ? window.location.origin : "";

export default function En() {
  const rMain = useRevealOnScroll({ threshold: 0.15 });

  return (
    <>
      {/* React 19: これらは自動で <head> へ hoist されます */}
      <title>TalkMates | Student club at Doshisha University</title>
      <meta
        name="description"
        content="TalkMates is a student club at Doshisha University (Kyoto). Activities, events, and how to join."
      />
      <link rel="canonical" href={`${SITE}/en`} />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="ja" />
      <link rel="alternate" href={`${SITE}/en`} hreflang="en" />
      <link rel="alternate" href={`${SITE}/fr`} hreflang="fr" />
      <link rel="alternate" href={`${SITE}/it`} hreflang="it" />
      <link rel="alternate" href={`${SITE}/ja`} hreflang="x-default" />

      {/* UI */}
      <nav className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 0" }}>
        <a href="#top" className="button">TalkMates</a>
        <div style={{ display:"flex", gap:12, alignItems:"center" }}>
          <LangSwitch />
          <AccentToggle />
        </div>
      </nav>

      <main id="top" className="section">
        <div className="container" data-reveal ref={rMain}>
          <h1 className="h1">
            Welcome to <span className="accent">TalkMates</span> (Doshisha Univ.)
          </h1>
          <p className="p" style={{ maxWidth:720 }}>
            Kyoto-based student club. Check our activities, events, and how to join.
          </p>
          <div style={{ marginTop:24, display:"flex", gap:12, flexWrap:"wrap" }}>
            <a className="button" href="/ja#contact">Contact (Instagram)</a>
          </div>
        </div>
      </main>
    </>
  );
}
