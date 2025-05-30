import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import LineAdd from '@/components/LineAdd'
import GallerySection from '@/components/GallerySection'
import type { Metadata } from 'next'
import ServiceSection from '@/components/ServiceSection'
import { Province, PageParams } from '@/types';
import Link from 'next/link'
import Image from 'next/image';



const provinces: Province[] = [
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99', name: 'ขอนแก่น' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5', name: 'อุดรธานี' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2', name: 'หนองคาย' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC', name: 'บึงกาฬ' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3', name: 'สกลนคร' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1', name: 'นครพนม' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3', name: 'มุกดาหาร' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C', name: 'กาฬสินธุ์' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94', name: 'ร้อยเอ็ด' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1', name: 'มหาสารคาม' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C', name: 'บุรีรัมย์' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C', name: 'สุรินทร์' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9', name: 'ศรีสะเกษ' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5', name: 'อุบลราชธานี' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3', name: 'ยโสธร' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D', name: 'อำนาจเจริญ' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9', name: 'หนองบัวลำภู' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B9%80%E0%B8%A5%E0%B8%A2', name: 'เลย' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4', name: 'ชัยภูมิ' },
  { id: '%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2', name: 'นครราชสีมา' }
];

export async function generateStaticParams(): Promise<PageParams[]> {
  return provinces.map(province => ({
    id: province.id
  }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const province = provinces.find(p => p.id === params.id);
  if (!province) return {
    title: 'ไม่พบข้อมูลจังหวัด',
  };
  return {
    title: `รถเฮี๊ยบ${province.name} | บริการรถเครนครบวงจร`,
    description: `บริการรถเฮี๊ยบและรถเครนใน${province.name} ทุกขนาด 3-25 ตัน`,
    keywords: [`รถเฮี๊ยบ${province.name}`, `รถเครน${province.name}`],
    alternates: {
      canonical: `https://yourdomain.com/${province.id}`,
    },
    openGraph: {
      images: ['/img/og-image.jpg'], // เพิ่ม OG Image
    }
  };
}

export default function ProvincePage({ params }: { params: PageParams }) {
  const province = provinces.find(p => p.id === params.id);
  
  if (!province) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">ไม่พบข้อมูลจังหวัด</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </main>
    );
  }



  return (
    <main className="min-h-screen">
      <Header />
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">รถเฮี๊ยบ{province?.name}</h1>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">รถเครน{province?.name}</h1>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">รถเฮี๊ยบ 3-5-8 ตัน และ เครน 10-25 ตัน</h1>

<Image
  src="/img/003.jpg"
  alt={`บริการรถเฮี๊ยบและรถเครนใน${province.name}`}
  width={800}
  height={450}
  className="w-full mt-10 mb-10 h-auto max-h-[400px] object-contain"
  priority
/>          <p className="text-x0.7 md:text-2xl mb-8">เราให้บริการรถเฮี๊ยบครบทุกขนาด ทั้งรถเฮี๊ยบ 3 ตัน 5 ตัน และ 8 ตัน 
            พร้อมรถเครนยกของหนักขนาด 10-25 ตัน สำหรับงานขนย้ายทุกประเภท 
            ทุกขนาดงาน ด้วยประสบการณ์มากกว่า 10 ปีในวงการขนย้าย 
            กดโทรปรึกษาได้เลยทันที </p>
            <p className="text-2xl md:text-4xl mb-8 text-red-600 font-bold">โทร : 086-480-7807 </p>
          <div className="text-center mt-12">
          <a 
            href="tel:0864807807" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl bg-white text-blue-600  px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
        📞 กดเพื่อโทร 📞
          </a>
        </div>

      </div>
    </section>

      <LineAdd/>
      <AboutSection />
      <GallerySection/>
      <ServiceSection/>
      <ContactSection />
      <Footer />
    </main>
  )
}