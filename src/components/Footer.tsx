import { FaGithub, FaDiscord, FaReddit, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10 pt-12 md:pt-24 2k:pt-40 pb-8 2k:pb-16 overflow-hidden">
      
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[500px] 2k:w-[800px] h-[250px] md:h-[500px] 2k:h-[800px] bg-purple-600/5 blur-[80px] md:blur-[120px] 2k:blur-[200px] rounded-full -z-10" />

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 2k:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 mb-12 md:mb-20 2k:mb-32">
          
          <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6 2k:space-y-10">
            <div className="text-xl md:text-2xl 2k:text-4xl font-bold tracking-tighter text-white italic uppercase">
              AETERNA<span className="text-purple-500">.</span>
            </div>
            <p className="text-gray-400 text-[12px] md:text-sm 2k:text-lg leading-relaxed max-w-xs 2k:max-w-md font-light opacity-70 italic">
              The world's most scalable blockchain network. Powering the next generation of decentralized AI.
            </p>
            <div className="flex gap-4 md:gap-5 2k:gap-8 text-gray-500 pt-2">
              <a href="#" className="hover:text-purple-400 transition-all hover:-translate-y-1"><FaGithub size={18} className="2k:w-7 2k:h-7" /></a>
              <a href="#" className="hover:text-purple-400 transition-all hover:-translate-y-1"><FaDiscord size={18} className="2k:w-7 2k:h-7" /></a>
              <a href="#" className="hover:text-purple-400 transition-all hover:-translate-y-1"><FaReddit size={18} className="2k:w-7 2k:h-7" /></a>
              <a href="#" className="hover:text-purple-400 transition-all hover:-translate-y-1"><FaTwitter size={18} className="2k:w-7 2k:h-7" /></a>
            </div>
          </div>

          <div className="col-span-1 lg:pl-4 2k:pl-12">
            <h4 className="text-white font-bold mb-4 md:mb-6 2k:mb-10 uppercase text-[9px] md:text-[10px] 2k:text-[14px] tracking-[0.25em] italic">Ecosystem</h4>
            <ul className="space-y-3 md:space-y-4 2k:space-y-6 text-[12px] md:text-sm 2k:text-lg text-gray-400 font-light">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contracts</a></li>
              <li><a href="#advantages" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Solutions</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 md:mb-6 2k:mb-10 uppercase text-[9px] md:text-[10px] 2k:text-[14px] tracking-[0.25em] italic">Resources</h4>
            <ul className="space-y-3 md:space-y-4 2k:space-y-6 text-[12px] md:text-sm 2k:text-lg text-gray-400 font-light">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Docs</a></li>
              <li><a href="#reviews" className="hover:text-purple-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 border-t border-white/5 pt-8 lg:border-none lg:pt-0">
            <h4 className="text-white font-bold mb-4 md:mb-6 2k:mb-10 uppercase text-[9px] md:text-[10px] 2k:text-[14px] tracking-[0.25em] italic">Contact</h4>
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 2k:gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] 2k:text-[12px] text-gray-600 uppercase tracking-widest">Email</span>
                <a href="mailto:hello@aeterna.io" className="text-white text-[12px] md:text-sm 2k:text-lg hover:text-purple-400 transition-colors italic font-medium">
                  hello@aeterna.io
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] 2k:text-[12px] text-gray-600 uppercase tracking-widest">Community</span>
                <span className="text-white text-[12px] md:text-sm 2k:text-lg font-medium italic">Join Discord</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 2k:pt-16 border-t border-white/5 flex flex-col gap-4 2k:gap-8 items-center">
          <div className="flex gap-6 2k:gap-12 text-[9px] md:text-[10px] 2k:text-[14px] uppercase tracking-[0.2em] text-gray-600 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-gray-700 text-[8px] md:text-[10px] 2k:text-[12px] uppercase tracking-[0.2em] text-center italic">
            © {currentYear} Aeterna Network. Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}