"use client";

import { 
  FaBolt,          
  FaClock, 
  FaChartLine, 
  FaShieldAlt, 
  FaRobot, 
  FaLayerGroup 
} from "react-icons/fa";

const items = [
  {
    title: "120K TPS Speed",
    text: "Ultra-fast transaction processing.",
    icon: <FaBolt className="text-yellow-400" />,
  },
  {
    title: "AI Security",
    text: "Neural networks monitoring threats.",
    icon: <FaShieldAlt className="text-purple-500" />,
  },
  {
    title: "Eco PoS",
    text: "99% less energy consumption.",
    icon: <FaLayerGroup className="text-blue-400" />,
  },
  {
    title: "AI Inside",
    text: "Native AI in smart contracts.",
    icon: <FaRobot className="text-pink-500" />,
  },
  {
    title: "Efficiency",
    text: "Save up to 20 hours per week.",
    icon: <FaClock className="text-emerald-400" />,
  },
  {
    title: "ROI Growth",
    text: "Increase conversion by 30%.",
    icon: <FaChartLine className="text-blue-500" />,
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-12 md:py-24 2k:py-40 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-4 md:px-10 2k:px-20 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl 2k:text-7xl font-bold text-center mb-10 md:mb-20 2k:mb-32 text-white tracking-tight italic uppercase">
          Why Choose <span className="text-purple-500">Aeterna?</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 2k:gap-12">
          {items.map((item, i) => (
            <article
              key={i}
              className="group relative p-4 md:p-8 2k:p-14 bg-white/5 border border-white/10 rounded-xl 2k:rounded-3xl hover:bg-white/[0.08] hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="relative flex flex-col items-start">
                <div className="text-xl md:text-3xl 2k:text-5xl mb-3 md:mb-5 2k:mb-8 inline-flex items-center justify-center p-2.5 md:p-3.5 2k:p-6 bg-black/50 rounded-lg 2k:rounded-2xl border border-white/10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  {item.icon}
                </div>
                
                <h3 className="text-[12px] md:text-xl 2k:text-3xl font-bold mb-1.5 md:mb-3 text-white group-hover:text-purple-300 transition-colors tracking-tight italic uppercase leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-tight md:leading-relaxed text-[10px] md:text-base 2k:text-xl font-light opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.text}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl 2k:rounded-3xl pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}