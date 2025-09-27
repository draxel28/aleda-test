import product1 from "../assets/picture1.jpg";
import product2 from "../assets/picture2.jpg";
import product3 from "../assets/picture3.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-indigo-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Connecting markets, delivering{" "}
            <span className="text-indigo-600">quality</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Aleda Trading Company is your trusted partner in sourcing and
            distribution. We bridge the gap between producers and retailers by
            ensuring timely deliveries, competitive pricing, and strict quality
            control measures.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
            >
              Our Products
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
            >
              Contact Sales
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow-md text-center">
              <h3 className="text-base font-semibold text-gray-900">
                Global Sourcing
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Access to trusted suppliers
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-md text-center">
              <h3 className="text-base font-semibold text-gray-900">
                Quality Control
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Rigorous inspection process
              </p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow-md text-center">
              <h3 className="text-base font-semibold text-gray-900">
                Reliable Logistics
              </h3>
              <p className="text-sm text-gray-500 mt-1">On-time deliveries</p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={product1}
              alt="product 1"
              className="w-full h-48 object-cover rounded-xl shadow-md"
            />
            <img
              src={product2}
              alt="product 2"
              className="w-full h-48 object-cover rounded-xl shadow-md"
            />
          </div>
          <img
            src={product3}
            alt="distribution"
            className="w-full h-64 object-fill rounded-xl shadow-lg"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
