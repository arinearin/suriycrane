export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">เกี่ยวกับเรา</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/img/001.jpg"
              alt="About Us" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-600">รถเฮี๊ยบรับจ้าง รถเครนรับจ้าง คืออะไร</h3>
            <p className="text-gray-600 mb-4">
              รถเฮี๊ยบและรถเครนให้บริการขนย้ายครบวงจร พร้อมทีมงานมืออาชีพที่มีประสบการณ์กว่า 10 ปี เรามีรถเฮี๊ยบ 6-10 ล้อให้เลือกใช้บริการตามความต้องการ ทั้งงานรายวันและรายเดือน โดยให้บริการครอบคลุมทุกพื้นที่ทั่วประเทศ

เรารับจ้างขนย้ายทุกประเภท ทั้งงานยกเครื่องจักรอุตสาหกรรม ขนส่งอุปกรณ์ก่อสร้าง เคลื่อนย้ายตู้คอนเทนเนอร์ ยกย้ายบ้าน คอนโด และออฟฟิศ ติดตั้งป้ายโฆษณา รวมถึงบริการรถกระเช้าสำหรับงานติดตั้งในที่สูง เช่น งานซ่อมบำรุงอาคาร งานระบบไฟฟ้า และงานตัดแต่งต้นไม้ใหญ่
            </p>
            <p className="text-gray-600 mb-6">
จุดเด่นของบริการเราคือความรวดเร็วและปลอดภัย ท่านสามารถเช็คราคาก่อนได้ โดยไม่มีค่าใช้จ่ายซ่อนเร้น เรามีราคายุติธรรม คุ้มค่า และให้คำปรึกษาฟรีสำหรับทุกงาน

บริการของเราพร้อมให้บริการ 24 ชั่วโมง ทุกวันไม่เว้นวันหยุด ด้วยทีมงานผู้ชำนาญการที่เข้าใจทุกความต้องการของลูกค้า ไม่ว่างานจะใหญ่แค่ไหน เราพร้อมเป็นพันธมิตรคู่ใจในการขนย้ายทุกครั้ง
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}