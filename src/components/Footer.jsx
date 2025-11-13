export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#3b2f2f]/80">© {new Date().getFullYear()} Kuphi Coffee House. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/privacy" className="text-[#3b2f2f] hover:text-[#2f2424] transition-all duration-300 ease-out">Privacy</a>
            <a href="/terms" className="text-[#3b2f2f] hover:text-[#2f2424] transition-all duration-300 ease-out">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
