import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
