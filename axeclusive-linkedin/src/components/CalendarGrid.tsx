import { calendar } from "@/data/content";

export function CalendarGrid() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur">
      <h2 className="text-2xl font-semibold text-slate-900">
        30-Day Corporate Content Calendar
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Anchored on peak LinkedIn engagement windows for HR, people leaders, and
        event planners.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {calendar.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-inner"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
              Week {entry.week}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {entry.focus}
            </h3>
            <p className="mt-2 text-sm text-slate-700">{entry.objective}</p>
            <dl className="mt-4 space-y-3 text-sm text-slate-600">
              <div>
                <dt className="font-medium text-slate-800">Primary audience</dt>
                <dd>{entry.primaryAudience}</dd>
              </div>
              <div className="flex flex-wrap gap-4">
                <div>
                  <dt className="font-medium text-slate-800">
                    Best day to post
                  </dt>
                  <dd>{entry.recommendedPostDay}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-800">Optimal time</dt>
                  <dd>{entry.recommendedPostTime}</dd>
                </div>
              </div>
              <div>
                <dt className="font-medium text-slate-800">Content angle</dt>
                <dd>{entry.angle}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
