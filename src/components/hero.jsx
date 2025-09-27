export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-indigo-600">Aleda Trading</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting markets, delivering value, and building lasting
          partnerships through reliable trading solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
