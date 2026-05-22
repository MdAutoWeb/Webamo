export default function TestimonialSection() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[720px] mx-auto px-5 py-16 md:py-24 text-center">
        <svg
          className="w-8 h-8 text-[#2563EB] mx-auto mb-6"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.657 1.343-3 3-3V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.657 1.343-3 3-3V8z" />
        </svg>

        <blockquote className="font-bold text-[22px] md:text-[26px] tracking-[-0.02em] leading-[1.3] text-[#0A0A0A] mb-6">
          &ldquo;Ik ben enorm tevreden over mijn nieuwe website. Alles werd heel professioneel gemaakt
          en volledig naar mijn wensen.&rdquo;
        </blockquote>

        <div className="flex items-center justify-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white font-bold text-[14px]"
            aria-hidden
          >
            RS
          </div>
          <div className="text-left">
            <div className="font-semibold text-[14px] text-[#0A0A0A]">Robby Seynaeve</div>
            <div className="text-[12px] text-[#9CA3AF]">Dakralux</div>
          </div>
        </div>
      </div>
    </section>
  );
}
