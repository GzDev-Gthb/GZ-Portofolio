const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-border py-24"
    >

      {/* SECTION HEADER */}

      <div className="flex flex-wrap items-end justify-between gap-6">

        <div>

          <p className="font-mono text-xs tracking-widest text-accent">
            03 / SELECTED WORK
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            Things I&apos;m building.
          </h2>

        </div>

        <p className="max-w-xs text-sm leading-7 text-muted">
          A collection of projects documenting my
          learning journey and practical exploration.
        </p>

      </div>


      {/* PROJECT CARD */}

      
<article
  className="
    group mt-12 grid overflow-hidden
    rounded-card border border-border bg-surface

    transition-all duration-300 ease-out

    hover:-translate-y-1
    hover:border-accent/30
    hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]

    motion-reduce:transform-none
    motion-reduce:transition-none

    md:grid-cols-2
  "
>


        {/* PROJECT INFORMATION */}

        <div className="p-7 sm:p-10">

          <div className="flex items-center justify-between">

            <span className="font-mono text-xs tracking-widest text-accent">
              PROJECT / 001
            </span>

            <span className="rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] text-accent">
              IN PROGRESS
            </span>

          </div>


          <h3 className="mt-14 text-3xl font-semibold tracking-tight">
            Ghazi Portfolio
          </h3>


          <p className="mt-5 text-sm leading-8 text-muted">
            A personal portfolio website designed to document
            my journey as an Information Systems student and
            explore modern web development technologies.
          </p>


          {/* TECHNOLOGIES */}

          <div className="mt-8 flex flex-wrap gap-2">

            {technologies.map((technology) => (

              <span
                key={technology}
                className="rounded-full border border-border px-3 py-2 font-mono text-[10px] text-muted"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>


        {/* PROJECT VISUAL */}

        <div className="flex min-h-80 items-center justify-center border-t border-border bg-surface-raised p-8 md:border-t-0 md:border-l">

          <div className="w-full max-w-xs rounded-2xl border border-border bg-background p-6">

            <div className="flex items-center justify-between">

              <span className="font-mono text-[10px] tracking-widest text-muted">
                GH / PERSONAL
              </span>

              <span className="h-2 w-2 rounded-full bg-accent" />

            </div>


            <div className="py-12">

              <p className="text-7xl font-semibold tracking-[-0.08em]">
                GZ<span className="text-accent">.</span>
              </p>

              <p className="mt-4 font-mono text-[10px] tracking-widest text-muted">
                BUILDING WITH PURPOSE
              </p>

            </div>


            <div className="h-1 w-full overflow-hidden rounded-full bg-surface">

              <div className="h-full w-1/2 rounded-full bg-accent" />

            </div>

            <p className="mt-3 font-mono text-[10px] text-subtle">
              PERSONAL WEBSITE / 2026
            </p>

          </div>

        </div>

      </article>

    </section>
  );
}