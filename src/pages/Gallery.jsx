import Layout from '../components/Layout'

const images = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502462041640-5b3ee6bcc646?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Galeri</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
              <img src={src} alt="galeri" className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-out" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
