'use client';

export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen bg-[#0f172a] text-white py-20 px-6 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-sky-400 mb-10 font-grotesk">
          Get in Touch
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Have questions about our drone solutions, training programs, or services?
          Reach out to us — we're here to help!
        </p>

        <form className="bg-[#1e293b] p-8 rounded-xl shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#0f172a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded bg-[#0f172a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-[#0f172a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#0f172a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-semibold py-3 rounded hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-12 text-sm text-gray-400">
          Or email us directly:{" "}
          <a href="mailto:info@magicmyna.in" className="underline text-sky-400">
            info@magicmyna.in
          </a>
        </div>
      </div>
    </section>
  );
}
