import { CalendarGrid } from "@/components/CalendarGrid";
import { Hero } from "@/components/Hero";
import { PostList } from "@/components/PostList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100/70 py-16 font-sans text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10">
        <Hero />
        <CalendarGrid />
        <PostList />
      </div>
    </main>
  );
}
