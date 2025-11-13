import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[460px] w-full">
        <img
          src="/coffee.jpg"
          alt="Coffee hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white animate-in opacity-0 [animation-fill-mode:forwards] [animation-duration:800ms]">
            <h1 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Keterbatasan menciptakan inovasi citarasa yang sempurna
            </h1>
            <a
              href="/menu"
              className="inline-block bg-[#f5e6cc] text-[#3b2f2f] px-6 py-3 rounded-xl shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'Single Origin',desc:'Dipilih dari kebun terbaik.'},
            {title:'Roastery Harian',desc:'Selalu segar untuk Anda.'},
            {title:'Signature Blend',desc:'Racikan khas penuh karakter.'},
          ].map((item,idx)=> (
            <div key={idx} className="bg-[#f5e6cc] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-[#3b2f2f] mb-2" style={{letterSpacing: '.2px'}}>{item.title}</h3>
              <p className="text-[#3b2f2f]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
