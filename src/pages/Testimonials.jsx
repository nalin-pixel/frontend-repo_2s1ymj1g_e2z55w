import Layout from '../components/Layout'

const testimonials = [
  {name:'Alya', text:'Tempat favorit untuk kopi pagi. Aromanya juara!'},
  {name:'Rafi', text:'Latte art-nya selalu bikin senyum.'},
  {name:'Nadia', text:'Signature blend-nya unik, pahit-manis seimbang.'},
]

export default function Testimonials() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Testimoni</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
              <p className="text-[#3b2f2f] italic mb-4">“{t.text}”</p>
              <p className="text-[#3b2f2f]/80">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
