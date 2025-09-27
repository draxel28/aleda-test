export default function About1() {
  return (
    <section id="about-more" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About <span className="text-indigo-600">Aleda Trading</span>
          </h3>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Founded to bridge supply chains across regions, Aleda Trading
            focuses on sourcing consumer goods, small appliances, and packaged
            food items. Our team prioritizes strong supplier relationships,
            transparent pricing, and consistent delivery performance.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="font-semibold text-lg text-gray-900">
              Who we serve
            </h4>
            <p className="text-sm text-gray-600 mt-3">
              Retailers, wholesalers, and e-commerce businesses seeking reliable
              inventory partners.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="font-semibold text-lg text-gray-900">How we work</h4>
            <p className="text-sm text-gray-600 mt-3">
              We source from certified suppliers, run inspection checks, and
              manage logistics until goods reach the customer.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h4 className="font-semibold text-lg text-gray-900">
              Sustainability
            </h4>
            <p className="text-sm text-gray-600 mt-3">
              We encourage ethical sourcing and minimize waste through smarter
              packaging and consolidated shipments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
