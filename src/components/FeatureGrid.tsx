import { FaMicrochip, FaGlobe, FaShieldAlt, FaTools, FaCogs, FaSatellite } from 'react-icons/fa';

const features = [
  { icon: <FaMicrochip />, label: 'AI Integration' },
  { icon: <FaGlobe />, label: 'Remote Deployment' },
  { icon: <FaShieldAlt />, label: 'Secure Data Handling' },
  { icon: <FaTools />, label: 'Custom Payloads' },
  { icon: <FaCogs />, label: 'Autonomous Flights' },
  { icon: <FaSatellite />, label: 'Real-Time Analytics' },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 bg-white/5 p-10 rounded-2xl backdrop-blur-sm">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-3">
          <div className="text-white text-4xl">{feature.icon}</div>
          <p className="text-white font-medium">{feature.label}</p>
        </div>
      ))}
    </div>
  );
}
