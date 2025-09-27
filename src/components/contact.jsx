import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g85p63l", // Replace with your Service ID
        "template_b15pfnd", // Replace with your Template ID
        form.current,
        "V6Alz9dFbzoeNPbYV" // Replace with your Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left side - Map and Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.089423493713!2d121.0273988153511!3d14.55472978982664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e2fdc4c3b5%3A0xd4e33d1e07df2c6a!2sMakati%20City!5e0!3m2!1sen!2sph!4v1695893322000!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow"
          ></iframe>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <Mail className="text-blue-600" size={20} />
              info@aledatrading.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-blue-600" size={20} />
              +63 912 345 6789
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="text-blue-600" size={20} />
              123 Business St., Makati City, Philippines
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white shadow rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="message"
              rows="5"
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && (
            <p className="mt-4 text-green-600 font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
