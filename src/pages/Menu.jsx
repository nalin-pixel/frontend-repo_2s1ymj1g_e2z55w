import Layout from '../components/Layout'

const items = [
  {name:'Espresso', price:'25K', img:'https://images.unsplash.com/photo-1459257868276-5e65389e2722?q=80&w=600&auto=format&fit=crop'},
  {name:'Cappuccino', price:'32K', img:'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop'},
  {name:'Latte', price:'32K', img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop'},
  {name:'Mocha', price:'35K', img:'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop'},
  {name:'Americano', price:'28K', img:'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=600&auto=format&fit=crop'},
  {name:'Manual Brew', price:'30K', img:'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop'},
]

export default function Menu() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3b2f2f] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Menu</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
              <div className="overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover group-hover:scale-[1.03] transition-all duration-300 ease-out" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#3b2f2f]">{item.name}</h3>
                <span className="text-[#3b2f2f]/80">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
