
export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">สุริยารถเฮี๊ยบรับจ้าง</h1>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">รถเฮี๊ยบ รถเครน</h1>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">รับจ้างทั่วไทย</h1>
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-300">รถเฮี๊ยบ 3-5-8 ตัน และ เครน 10-25 ตัน</h1>


          <p className="text-xl md:text-2xl mb-8">เราให้บริการรถเฮี๊ยบครบทุกขนาด ทั้งรถเฮี๊ยบ 3 ตัน 5 ตัน และ 8 ตัน 
            พร้อมรถเครนยกของหนักขนาด 10-25 ตัน สำหรับงานขนย้ายทุกประเภท 
            ทุกขนาดงาน ด้วยประสบการณ์มากกว่า 10 ปีในวงการขนย้าย 
            กดโทรปรึกษาได้เลยทันที </p>
            <p className="text-xl md:text-2xl mb-8 text-red-600 font-bold">โทร : 086-480-7807 </p>
          <div className="text-center mt-12">
          <a 
            href="tel:0864807807" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            กดเพื่อโทร
          </a>
        </div>

      </div>
    </section>
  )
}