import StatsCounter from '@/components/StatsCounter';

export default function AchievementsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text */}
        <div>
          <p className="text-sm font-semibold text-cyan-700 uppercase">What we achieved</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Leading the future of UAV technology<br />
            with proven success
          </h2>
          <p className="text-gray-600 text-base">
            Delivering innovative and reliable solutions across industries, MagicMyna is redefining excellence in drone technology.
          </p>
        </div>

        {/* RIGHT: Card with Stats */}
        <div className="bg-white rounded-2xl shadow-lg grid grid-cols-2 gap-y-8 border p-8 relative z-10">
          <StatsCounter target={5000} label="Mtrs Trail Tested" />
          <StatsCounter target={15} label="Application" />
          <StatsCounter target={5} label="Models" />
          <StatsCounter target={2} label="Years Rigorous Trails" />
        </div>
      </div>

      {/* Bottom logos */}
      <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-80">
        <img src="/msme-logo.png" alt="MSME" className="h-10" />
        <p className="text-gray-600">Proud Members of</p>
        <img src="/nal-logo.png" alt="NAL" className="h-10" />
        <img src="/sidm-logo.png" alt="SIDM" className="h-10" />
      </div>
    </section>
  );
}
