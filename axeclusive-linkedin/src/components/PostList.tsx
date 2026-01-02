import { LinkedInPost, posts } from "@/data/content";

const categoryLabels: Record<LinkedInPost["category"], string> = {
  calendar: "Calendar",
  testimonial: "Testimonial",
  educational: "Educational Insight",
  invitation: "Booking Invite",
  highlight: "Experience Highlight",
  carousel: "Carousel Concept",
  event: "Event Spotlight",
};

const categoryAccent: Record<LinkedInPost["category"], string> = {
  calendar: "bg-sky-100 text-sky-700",
  testimonial: "bg-emerald-100 text-emerald-700",
  educational: "bg-indigo-100 text-indigo-700",
  invitation: "bg-rose-100 text-rose-700",
  highlight: "bg-amber-100 text-amber-700",
  carousel: "bg-purple-100 text-purple-700",
  event: "bg-slate-200 text-slate-800",
};

function PostCard({ post }: { post: LinkedInPost }) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-md backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Week {post.week}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {post.title}
          </h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${categoryAccent[post.category]}`}
        >
          {categoryLabels[post.category]}
        </span>
      </div>
      <div className="text-sm font-medium text-rose-500">
        {post.scheduledFor}
      </div>
      <p className="text-base font-semibold text-slate-800">{post.hook}</p>
      <p className="text-sm leading-6 text-slate-700">{post.body}</p>
      <div className="rounded-2xl bg-slate-100/70 p-4">
        <h4 className="text-sm font-semibold text-slate-800">Visual concept</h4>
        <p className="mt-1 text-sm text-slate-600">{post.imageIdea}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
        {post.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700">
        <strong className="font-semibold text-slate-900">
          Call to action:{" "}
        </strong>
        {post.callToAction}
      </div>
      {post.formatHint && (
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Format: {post.formatHint}
        </div>
      )}
    </article>
  );
}

export function PostList() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-900">
        Ready-to-Publish LinkedIn Posts
      </h2>
      <p className="text-sm text-slate-600">
        Deliverables cover testimonials, educational tips, booking nudges, and
        experience spotlights designed for HR, team leads, and event planners.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
