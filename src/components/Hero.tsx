import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center bg-black overflow-hidden min-h-screen
        pt-32
        md:pt-[12vh]
        xl:pt-[22vh]
        2k:pt-[30vh]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] h-[500px] md:h-[800px] bg-[radial-gradient(circle_at_50%_20%,rgba(140,70,255,0.2),transparent_75%)] -z-10" />

      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="
          font-bold leading-[1.1] tracking-tighter uppercase text-white
          text-[32px]
          md:text-5xl
          xl:text-[72px]
          2k:text-[96px]
        ">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            THE BEST WEBSITE EVER
          </span>
          <br />
          <span className="text-white">Scalable.</span>
        </h1>

        <p className="
          mt-6 text-white mx-auto leading-relaxed font-light
          text-[13px]
          md:text-base
          xl:text-lg
          2k:text-xl
          max-w-[300px] md:max-w-2xl xl:max-w-3xl 2k:max-w-4xl
        ">
          Our technology powers a high-speed blockchain (120K TPS) with
          guaranteed AI-based data security.
        </p>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-[260px] sm:max-w-none items-center justify-center z-40 relative">
          <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 border border-purple-500 rounded-full text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/20 transition-all active:scale-95">
            Get started
          </button>
          <button className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white/5 border border-white/10 rounded-full text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white/10 transition-all active:scale-95">
            Read more
          </button>
        </div>
      </div>

      <div
        className="
          relative z-10 w-full max-w-[1920px] px-0 pointer-events-none
          mt-16
          md:mt-[-200px]
          xl:mt-[-100px]
          2k:mt-[-90px]
          mb-0
        "
        style={{
          maskImage: "linear-gradient(to top, transparent 0px, black 150px)",
          WebkitMaskImage: "linear-gradient(to top, transparent 0px, black 150px)",
        }}
      >
        <Image
          src="/hero-visual.webp"
          alt="Aeterna AI Robots"
          width={1920}
          height={740}
          priority
          className="w-full h-auto object-contain brightness-110 contrast-110 saturate-125 md:saturate-100"
        />
      </div>
    </section>
  );
}