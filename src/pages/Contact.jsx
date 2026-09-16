import Header from '../components/Header';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent pt-28 sm:pt-36 pb-16 px-6 sm:px-10 lg:px-12 flex flex-col justify-between relative overflow-hidden">
      <Header />

      <main className="max-w-4xl mx-auto w-full text-center space-y-8 sm:space-y-10 my-auto relative z-10">
        {/* Contact Me Section Header */}
        <div className="space-y-3">
          <h1 className="heading-editorial-section text-[#0C2B3A]">
            Contact Me<span className="text-[#0C2B3A]">.</span>
          </h1>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#164359]/80 font-normal max-w-xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Paper-Style Email Card CTA (Entire Card Clickable) */}
        <a
          href="mailto:aradhikapatil06@gmail.com"
          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full max-w-3xl mx-auto bg-white/95 rounded-3xl sm:rounded-[32px] border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.025)] hover:shadow-md hover:-translate-y-1 active:scale-[0.995] transition-all duration-300 ease-out cursor-pointer p-7 sm:p-9 md:p-11 text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Envelope Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0C2B3A]/5 border border-[#0C2B3A]/10 flex items-center justify-center text-[#0C2B3A] shrink-0">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
            </div>

            {/* Text Info */}
            <div className="space-y-1">
              <span className="label-editorial text-xs sm:text-[13px] tracking-[0.14em] text-[#164359]/70 block">
                SEND ME AN EMAIL
              </span>
              <span className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#0C2B3A] group-hover:text-[#164359] transition-colors duration-200 font-normal block break-all sm:break-normal">
                aradhikapatil06@gmail.com
              </span>
            </div>
          </div>

          {/* Arrow Button */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0C2B3A] text-white flex items-center justify-center group-hover:bg-[#164359] transition-colors duration-200 shrink-0 self-end sm:self-center">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </a>
      </main>

      <footer className="w-full max-w-4xl mx-auto text-center pt-8 pb-4 relative z-10">
        <p className="label-editorial text-xs text-[#164359]/50">
          © {new Date().getFullYear()} Aradhika Patil · All rights reserved
        </p>
      </footer>
    </div>
  );
}

