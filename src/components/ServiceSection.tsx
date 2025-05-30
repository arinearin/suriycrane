
import Link from "next/link"

export default function ServiceSection() {
  const services = [
    {
      title: "รถเฮี๊ยบรับจ้าง",
      description: "บริการรถเฮี๊ยบรับจ้าง ยกของหนัก 3-8 ตัน เครน 3-10 ตัน เรารับจ้างยกของหนักทั่วไทย ราคาเริ่มต้นไม่แพง",
      icon: "🔧",
    },
    {
      title: "เช่ารถเฮี๊ยบเหมาวัน",
      description: "บริการเช่ารถเครนและรถเฮี๊ยบรายวัน ราคาเริ่มต้น 4,000 บาท/วัน มีเครนหลายขนาด 3-70 ตัน พร้อมทีมงานมืออาชีพ",
      icon: "🛠️",
    },
    {
      title: "ขนย้ายสินค้า",
      description: "บริการขนย้ายสินค้าขนาดใหญ่ไปยังที่ต่างๆ ตามที่คุณต้องการด้วยบริการรถเอี๊ยบขนย้ายของเรา",
      icon: "⚙️",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">บริการของเรา</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
         <Link href="views">
        <div className="text-center mt-12">
            <p className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              บริการเพิ่มเติม
            </p>
        </div>
       </Link>
      </div>
    </section>
  )
}