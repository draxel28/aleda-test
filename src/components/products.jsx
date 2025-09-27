export default function Products() {
  return (
    <section id="products" className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-indigo-600">Products</span>
          </h3>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Explore our curated selection of high-quality products designed to
            support businesses with consistency, reliability, and value.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Product 1",
              img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=60",
            },
            {
              name: "Product 2",
              img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=60",
            },
            {
              name: "Product 3",
              img: "https://images.unsplash.com/photo-1542293787938-c9e299b8809d?auto=format&fit=crop&w=600&q=60",
            },
            {
              name: "Product 4",
              img: "https://images.unsplash.com/photo-1513708928676-48f37bda33ec?auto=format&fit=crop&w=600&q=60",
            },
            {
              name: "Product 5",
              img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=60",
            },
            {
              name: "Product 6",
              img: "https://images.unsplash.com/photo-1542293787938-c9e299b8809d?auto=format&fit=crop&w=600&q=60",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h5 className="text-xl font-semibold text-indigo-700 group-hover:text-indigo-800 transition">
                  {product.name}
                </h5>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Premium {product.name.toLowerCase()} tailored to support your
                  business needs with quality and reliability.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
