import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Tentang Kuphi
          </h2>
          <p className="text-[#3b2f2f]/90 text-lg mb-6">
            Kami percaya setiap biji kopi memiliki cerita — dari tanah, tangan, hingga cangkir Anda.
          </p>
        </div>

        <div className="bg-[#f5e6cc] rounded-2xl shadow-sm p-6 md:p-8 mb-12">
          <p className="text-[#3b2f2f] leading-relaxed mb-3">
            Awal saya mendirikan usaha ini dikarenakan saya terpaksa resign setelah selama 6 tahun saya bekerja di bank karena mengalami cedera meniskus yang mengharuskan saya menjalani operasi. Selama masa pemulihan muncul ide untuk membangun usaha ini. Berawal dari kecintaan saya terhadap kopi dan kebiasaan meracik sendiri, saya akhirnya memberanikan diri membuka usaha ini.
          </p>
          <p className="text-[#3b2f2f] leading-relaxed">
            Nama “Kuphi” sendiri berasal dari cara saya menyebut kata ‘kopi’ saat bercanda dengan teman-teman di kantor. Karena terdengar unik dan khas, akhirnya saya memilih nama itu untuk brand saya. Saat ini usaha masih dijalankan secara online dari rumah.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-black/5">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-bottom" />
          <iframe
            title="Lokasi Kuphi"
            src="https://www.google.com/maps?q=Jl.+Gading+12+No.+12,+Komplek+TNI+AL,+Kelapa+Gading+Barat,+Jakarta+Utara+14240&output=embed"
            loading="lazy"
            className="w-full h-[360px]"
          />
        </div>
      </section>
    </Layout>
  )
}
