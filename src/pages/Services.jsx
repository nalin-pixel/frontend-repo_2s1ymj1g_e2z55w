import Layout from '../components/Layout'

const services = [
  {title:'Coffee Catering', desc:'Layanan barista untuk acara Anda.'},
  {title:'Workshop Brewing', desc:'Kelas meracik kopi untuk pemula.'},
  {title:'Beans Subscription', desc:'Kirim biji kopi segar tiap bulan.'},
]

export default function Services() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Layanan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-[#f5e6cc] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#3b2f2f] mb-2">{s.title}</h3>
              <p className="text-[#3b2f2f]/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
