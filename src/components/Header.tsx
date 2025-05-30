import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            สุริยารถเฮี๊ยบ
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              หน้าแรก
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600">
              เกี่ยวกับเรา
            </Link>
            <Link href="#services" className="text-gray-800 hover:text-blue-600">
              บริการ
            </Link>
            <Link href="#gallery" className="text-gray-800 hover:text-blue-600">
              แกลเลอรี่
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600">
              ติดต่อเรา
            </Link>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}