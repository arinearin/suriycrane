export default function LineAdd() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/img/lineadd02.png" 
              alt="About Us" 
              className="rounded-lg hidden md:block"
            />
          </div>
          <div className="md:w-1/2">
            <img 
              src="img/lineadd01.png"
              alt="About Us" 
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  )
}