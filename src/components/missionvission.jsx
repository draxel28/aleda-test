export default function Mission() {
  return (
    <section
      id="mission-vision"
      className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Our Mission & Vision</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          At Aleda Trading, our mission and vision guide every step we take —
          shaping how we serve our clients today and how we grow for tomorrow.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow hover:shadow-lg transition text-left">
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl text-xl font-bold">
                M
              </span>
              <h4 className="ml-4 text-2xl font-semibold text-blue-700">
                Our Mission
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality trading products and services with
              integrity and innovation — consistently exceeding customer
              expectations and fostering long-term partnerships.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow hover:shadow-lg transition text-left">
            <div className="flex items-center mb-4">
              <span className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-xl text-xl font-bold">
                V
              </span>
              <h4 className="ml-4 text-2xl font-semibold text-blue-700">
                Our Vision
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted leader in trading, recognized globally for
              excellence, quality, and sustainable growth — empowering
              businesses and communities alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
