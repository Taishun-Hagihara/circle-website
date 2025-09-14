import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import Contact from '../components/Contact.jsx'

const mock = [
  { id: 1, title: '新歓LT', img: 'https://picsum.photos/600/400', tags: ['LT','新歓'] },
  { id: 2, title: '学祭展示', img: 'https://picsum.photos/600/401', tags: ['展示'] },
  { id: 3, title: 'ハッカソン', img: 'https://picsum.photos/600/402', tags: ['開発'] },
]

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Section id="activities" title="最近の活動">
        <div className="grid">
          {mock.map(a => <ActivityCard key={a.id} item={a} />)}
        </div>
      </Section>
      <Contact />
    </>
  )
}
