import Skeleton from "./Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <article
      aria-label="Loading project"
      className="
        grid overflow-hidden
        rounded-card border border-border
        bg-surface md:grid-cols-2
      "
    >
      {/* CONTENT PLACEHOLDER */}

      <div className="space-y-6 p-7 sm:p-10">

        <Skeleton className="h-3 w-28" />

        <Skeleton className="mt-12 h-9 w-3/4" />

        <div className="space-y-3">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-3 w-2/3" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>

      </div>

      {/* IMAGE PLACEHOLDER */}

      <div className="border-t border-border p-8 md:border-l md:border-t-0">
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>

    </article>
  );
}
