import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-6" style={{fontFamily: 'Playfair Display, serif'}}>Kontak</h2>
        <p className="text-[#3b2f2f]/90 mb-8">Ada pertanyaan atau ingin booking layanan? Kirim pesan kepada kami.</p>
        <form className="grid md:grid-cols-2 gap-6 bg-[#f5e6cc] p-6 rounded-2xl shadow-sm">
          <div>
            <label className="block text-sm text-[#3b2f2f]/80 mb-1">Nama</label>
            <input className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]/30 bg-white transition-all duration-300 ease-out" placeholder="Nama Anda" />
          </div>
          <div>
            <label className="block text-sm text-[#3b2f2f]/80 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]/30 bg-white transition-all duration-300 ease-out" placeholder="email@contoh.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-[#3b2f2f]/80 mb-1">Pesan</label>
            <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]/30 bg-white transition-all duration-300 ease-out" placeholder="Tulis pesan Anda..." />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center bg-[#3b2f2f] text-white px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out">
              Kirim Pesan
            </button>
          </div>
        </form>
      </section>
    </Layout>
  )
}
