import Link from "next/link";

export default function HomeLocalSection() {
  return (
    <section className="bg-[#F5F5F5] border-y border-[#E5E7EB]">
      <div className="max-w-[1120px] mx-auto px-5 py-14 md:py-16">
        <h2 className="font-bold text-[26px] md:text-[32px] tracking-[-0.025em] leading-[1.15] mb-4 text-[#0A0A0A]">
          Website laten maken in Brugge, Oostkamp en West-Vlaanderen
        </h2>
        <p className="text-[15px] text-[#6B7280] leading-[1.7] max-w-[720px] mb-4">
          Webamo is je lokale partner voor webdesign en automatisatie. We bouwen professionele
          websites voor zelfstandigen en KMO&apos;s die gevonden willen worden op Google en meer
          aanvragen willen binnenkrijgen, zonder zelf te moeten puzzelen met techniek.
        </p>
        <p className="text-[15px] text-[#6B7280] leading-[1.7] max-w-[720px]">
          Actief in{" "}
          <strong className="font-medium text-[#374151]">Brugge</strong>,{" "}
          <strong className="font-medium text-[#374151]">Oostkamp</strong> en heel{" "}
          <strong className="font-medium text-[#374151]">West-Vlaanderen</strong>.{" "}
          <Link href="/webdesign-brugge" className="text-[#2563EB] font-medium hover:underline">
            Meer over webdesign in Brugge
          </Link>
          {" · "}
          <Link href="/diensten" className="text-[#2563EB] font-medium hover:underline">
            Alle diensten
          </Link>
          {" · "}
          <Link href="/tarieven" className="text-[#2563EB] font-medium hover:underline">
            Transparante tarieven
          </Link>
        </p>
      </div>
    </section>
  );
}
