export function Hero() {
  return (
    <section className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-slate-50 p-12 shadow-lg">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600">
          Axeclusive · LinkedIn Agent
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          30-Day LinkedIn Plan for Corporate Team Building
        </h1>
        <p className="text-lg text-slate-700">
          Confident, human-first storytelling centered on Axeclusive’s axe
          throwing, splatter paint, and VR experiences. Built to help HR, team
          leads, and event planners book unforgettable corporate outings.
        </p>
        <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
            ✅ Weekly calendar with optimal days &amp; times
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
            ✅ 10 fully written posts + visuals + hashtags
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
            ✅ Testimonials, education, carousels, booking nudges
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white/70 p-4">
            ✅ Keeps tone friendly, confident, and professional
          </li>
        </ul>
      </div>
    </section>
  );
}
