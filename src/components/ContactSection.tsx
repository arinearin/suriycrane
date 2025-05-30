export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">ติดต่อเรา</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">ชื่อ</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">อีเมล</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">ข้อความ</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg h-full">
              <h3 className="text-xl font-semibold mb-4 text-gray-600" >ข้อมูลติดต่อ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-600">ที่อยู่:</h4>
                  <p className="text-gray-600">112 หมู่ 2 ต.โจดหนองแก อ.พล จ.ขอนแก่น 40120</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">โทร และ แอดไลน์:</h4>
                  <p className="text-gray-600">086-480-7807</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">อีเมล:</h4>
                  <p className="text-gray-600"> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}