export default function ActivityCard({ item }) {
    return (
      <article className="card">
        <img src={item.img} alt={item.title} />
        <div className="card-body">
          <h3>{item.title}</h3>
          <p className="tags">{item.tags.join(' / ')}</p>
        </div>
      </article>
    )
  }
  