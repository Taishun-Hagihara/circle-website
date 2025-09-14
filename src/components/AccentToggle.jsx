const OPTIONS = [
    { id: "red",   label: "R" },
    { id: "green", label: "G" },
    { id: "blue",  label: "B" },
  ];
  
  export default function AccentToggle() {
    const current = document.documentElement.getAttribute("data-accent") || "blue";
    const setAccent = (id) => {
      document.documentElement.setAttribute("data-accent", id);
      localStorage.setItem("accent", id);
    };
    return (
      <div aria-label="Accent color" role="group" style={{ display:"inline-flex", gap:8, padding:6, border:"1px solid rgba(255,255,255,.14)", borderRadius:9999, background:"rgba(0,0,0,.2)" }}>
        {OPTIONS.map(o => (
          <button key={o.id}
            onClick={() => setAccent(o.id)}
            aria-pressed={(current===o.id).toString()}
            className="chip"
            style={{ fontWeight:700, letterSpacing:1, borderColor: current===o.id? "var(--accent)":"rgba(255,255,255,.14)", color: current===o.id? "var(--accent)":"inherit" }}>
            {o.label}
          </button>
        ))}
      </div>
    );
  }
  
  