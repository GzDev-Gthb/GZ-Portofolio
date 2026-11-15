export default function Hero() {
  return (
    <section
      id="home"
      className="grid scroll-mt-28 gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28"
    >

      {/* LEFT CONTENT */}

      <div>

        <p className="font-mono text-xs tracking-[0.2em] text-accent">
          INFORMATION SYSTEMS STUDENT
        </p>


        <h1 className="mt-7 text-5xl leading-[1.08] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">

          Exploring technology.

          <br />

          <span className="text-muted">
            Understanding systems.
          </span>

        </h1>


        <p className="mt-7 max-w-xl text-base leading-8 text-muted">
          I&apos;m Ghazi, an Information Systems student interested
          in how technology connects people, data, and business
          processes. Building a broad foundation across
          different areas of IT, one project at a time.
        </p>


        {/* CTA */}

        <div className="mt-9 flex flex-wrap gap-3">

          
<a
  href="#projects"
  className="
    group inline-flex items-center gap-3
    rounded-full bg-accent px-6 py-3
    text-sm font-semibold text-background
    shadow-[0_0_0_rgba(201,243,107,0)]
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-[0_10px_30px_rgba(201,243,107,0.16)]
    hover:bg-accent-strong
    active:translate-y-0
    active:scale-[0.96]
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-accent
    motion-reduce:transform-none
    motion-reduce:transition-none
  "
>
  Explore my work

  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
    ↗
  </span>
</a>



          <a
            href="#about"
            
className="
  inline-flex items-center rounded-full
  border border-border px-6 py-3
  text-sm text-foreground
  transition-all duration-300 ease-out
  hover:-translate-y-0.5
  hover:border-accent/50
  hover:bg-surface-raised
  hover:text-accent
  active:scale-[0.97]
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-accent
  motion-reduce:transition-none
"

          >
            About me
          </a>

        </div>

      </div>


      {/* RIGHT CONTENT */}

      <aside className="rounded-card border border-border bg-surface p-7 shadow-card sm:p-9">

        <div className="flex items-center justify-between">

          <p className="font-mono text-xs tracking-widest text-muted">
            PERSONAL PROFILE
          </p>

          <span className="h-2 w-2 rounded-full bg-accent" />

        </div>


        <div className="mt-12">

          <p className="font-mono text-xs text-subtle">
            CAREER DIRECTION
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            IT Generalist<span className="text-accent">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted">
            Learning across disciplines, connecting ideas,
            and building practical technology solutions.
          </p>

        </div>


        <div className="mt-10 border-t border-border pt-7">

          <p className="font-mono text-xs tracking-widest text-muted">
            AREAS OF INTEREST
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {[
              "Software",
              "Data",
              "Systems",
              "Technology",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </aside>

    </section>
  );
}