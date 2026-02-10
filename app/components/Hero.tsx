import Starfield from "./Starfield";

export default function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-8 md:pt-10 pb-4 md:pb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left */}
          <div className="pt-1 md:pt-2">
            <h1 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.06] tracking-tight">
              <span className="sr-only">
                Websites die klanten opleveren. Automatisatie die tijd bespaart.
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Websites die klanten
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                opleveren.
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Automatisatie die tijd
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                bespaart.
              </span>
            </h1>

            <p className="mt-5 text-[15px] md:text-[16px] text-white/75 leading-relaxed max-w-xl">
              Wij bouwen moderne websites voor zelfstandigen, gecombineerd met
              slimme automatisatie die leads opvolgt, afspraken plant en manueel
              werk vermindert.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-7 py-3.5 rounded-lg font-semibold text-white text-[14px]
                           bg-gradient-to-r from-blue-500 to-violet-500
                           hover:from-blue-600 hover:to-violet-600
                           shadow-[0_18px_40px_rgba(37,99,235,0.28)]
                           transition-all text-center"
              >
                Gratis intakegesprek
              </a>

              <a
                href="/diensten"
                className="px-7 py-3.5 rounded-lg font-semibold text-white text-[14px]
                           border border-white/15 hover:bg-white/5
                           transition-all text-center"
              >
                Bekijk diensten
              </a>
            </div>
          </div>

          {/* Right - Starfield */}
          <div className="relative hidden lg:block h-[400px]">
            <Starfield
              width={520}
              height={400}
              starCount={80}
              opacity={0.7}
              largerStars={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
