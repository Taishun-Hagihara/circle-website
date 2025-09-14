export default function Activities({ items }) {
    return (
      <section id="activities" className="section">
        <div className="container">
          <header style={{ marginBottom: 24 }}>
            <h2 className="h2">Activities</h2>
            <p className="p">最近の活動や企画をカードで紹介します。</p>
          </header>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
            gap:"24px"
          }}>
            {items.map((it, i) => (
              <article key={i} className="card" data-reveal>
                <img src={it.image} alt="" loading="lazy"
                     style={{ width:"100%", aspectRatio:"16/10", objectFit:"cover",
                              borderTopLeftRadius:"var(--radius)", borderTopRightRadius:"var(--radius)" }} />
                <div style={{ padding:16 }}>
                  <h3 style={{ margin:"0 0 6px", fontSize:18, letterSpacing:.2 }}>{it.title}</h3>
                  <p className="p" style={{ margin:0 }}>{it.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  