import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServiceSection from '@/components/ServiceSection'
import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LineAdd from '@/components/LineAdd'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LineAdd />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}