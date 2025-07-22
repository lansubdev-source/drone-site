'use client';

export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen bg-white text-gray-800 py-20 px-6 font-poppins">
      <div className="max-w-5xl mx-auto">
        {/* 🔹 Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-6 font-grotesk">
          Let's Connect
        </h1>

        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Have questions about our drone services, training programs, or solutions?
          Drop us a message — we're happy to help!
        </p>

        {/* 🔹 Contact Form */}
        <div className="bg-white border border-gray-500 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🔹 Direct Email */}
        <div className="text-center mt-10 text-sm text-gray-500">
          Prefer email? Reach us directly at{" "}
          <a href="mailto:info@magicmyna.in" className="text-blue-600 underline font-medium">
            info@magicmyna.in
          </a>
        </div>
      </div>
    </section>
  );
}
