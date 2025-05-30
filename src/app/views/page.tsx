import Header from '@/components/Header';
import Link from 'next/link';

export default function ServicesPage() {
  // ข้อมูลตัวอย่าง 10 รายการ
  const items = [
    {
      title: "รถเฮี๊ยบขอนแก่น",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99"
    },
    {
      title: "รถเฮี๊ยบอุดรธานี",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5"
    },
    {
      title: "รถเฮี๊ยบหนองคาย",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2"
    },
    {
      title: "รถเฮี๊ยบบึงกาฬ",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%9A%E0%B8%B6%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%AC"
    },
    {
      title: "รถเฮี๊ยบสกลนคร",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%81%E0%B8%A5%E0%B8%99%E0%B8%84%E0%B8%A3"
    },
    {
      title: "รถเฮี๊ยบนครพนม",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%A1"
    },
    {
      title: "รถเฮี๊ยบมุกดาหาร",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A1%E0%B8%B8%E0%B8%81%E0%B8%94%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3"
    },
    {
      title: "รถเฮี๊ยบกาฬสินธุ์",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%AC%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C"
    },
    {
      title: "รถเฮี๊ยบร้อยเอ็ด",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%94"
    },
    {
      title: "รถเฮี๊ยบมหาสารคาม",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
      link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1"
    },
    {
    title: "รถเฮี๊ยบบุรีรัมย์",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B8%A2%E0%B9%8C"
  },
  {
    title: "รถเฮี๊ยบสุรินทร์",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C"
  },
  {
    title: "รถเฮี๊ยบศรีสะเกษ",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B0%E0%B9%80%E0%B8%81%E0%B8%A9"
  },
  {
    title: "รถเฮี๊ยบอุบลราชธานี",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5"
  },
  {
    title: "รถเฮี๊ยบยโสธร",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%A2%E0%B9%82%E0%B8%AA%E0%B8%98%E0%B8%A3"
  },
  {
    title: "รถเฮี๊ยบอำนาจเจริญ",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D"
  },
  {
    title: "รถเฮี๊ยบหนองบัวลำภู",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%B3%E0%B8%A0%E0%B8%B9"
  },
  {
    title: "รถเฮี๊ยบเลย",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B9%80%E0%B8%A5%E0%B8%A2"
  },
  {
    title: "รถเฮี๊ยบชัยภูมิ",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4"
  },
  {
    title: "รถเฮี๊ยบนครราชสีมา",
    description: "รถเฮี๊ยบ 10 ล้อ รถเฮี๊ยบ 6 ล้อ เครน 3-5-8 ตัน",
    link: "%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%AE%E0%B8%B5%E0%B9%8A%E0%B8%A2%E0%B8%9A%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2"
  }
   
  ];

  return (
    <main>
      <Header/>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-600">บริการรถเฮี๊ยบของเรา</h1>
        
        {/* รายการ 10 div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link href={item.link}>
                <button className="bg-yellow-400 hover:bg-red-400 text-white py-2 px-6 rounded">
                  ดูรายละเอียด
                </button>
              </Link>
              <img className='mt-5' src="img/001.jpg" alt="" />
            </div>
          ))}
        </div>

        {/* ปุ่มกลับ */}
        <div className="mt-10 text-center">
          <Link href="/" className="inline-block bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg">
            ← กลับหน้าหลัก
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
}