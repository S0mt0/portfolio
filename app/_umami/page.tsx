import Image from "next/image";

export default function Umami() {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#171914]">
      <section
        aria-label="Umami blog banner"
        className="relative isolate h-full w-full overflow-hidden bg-[#171914] text-white"
      >
        <Image
          src="/umami.png"
          alt="Umami banner background"
          fill
          priority
          sizes="(max-width: 1240px) 100vw, 1200px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,206,122,0.42),transparent_28%),linear-gradient(102deg,rgba(8,9,7,0.88)_0%,rgba(21,23,16,0.64)_38%,rgba(54,31,16,0.2)_66%,rgba(6,8,7,0.42)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/72 via-black/28 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

        <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-max border border-white/24 bg-black/18 px-3 py-2 font-mono text-[0.56rem] font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm sm:text-xs">
              Notes on product analytics
            </p>
            <p className="hidden border border-white/20 bg-white/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm sm:block">
              Somto
            </p>
          </div>

          <div className="max-w-[720px]">
            <p className="font-sketch text-4xl font-bold text-[#ffe39a] sm:text-6xl lg:text-7xl">
              Umami
            </p>
            <h1 className="mt-3 text-balance text-4xl font-black leading-[0.88] sm:text-6xl lg:text-7xl">
              Simple analytics, human signal.
            </h1>
            <p className="mt-5 max-w-[560px] text-sm font-semibold leading-6 text-white/78 sm:text-base sm:leading-7">
              A quiet look at privacy-friendly web analytics, cleaner metrics,
              and the parts of tracking that should stay useful.
            </p>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-[#ffe39a]" />
              <span className="h-2.5 w-2.5 bg-[#9ccf8d]" />
              <span className="h-2.5 w-2.5 bg-[#e8774f]" />
            </div>
            <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/68 sm:text-xs">
              Talktosomto.xyz
            </p>
          </div>
        </div>

        <p className="pointer-events-none absolute -right-6 bottom-14 z-10 rotate-[-9deg] font-sketch text-6xl font-bold text-white/12 sm:text-8xl lg:text-9xl">
          Somto
        </p>
      </section>
    </main>
  );
}
