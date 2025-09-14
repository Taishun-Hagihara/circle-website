export default function Section({ title, id, children }) {
    return (
      <section className="section" id={id}>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </section>
    )
  }
  