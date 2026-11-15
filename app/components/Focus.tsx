const areas = [
  {
    number: "01",
    title: "Software & Web",
    description:
      "Exploring how applications and interfaces turn ideas into useful digital experiences.",
  },
  {
    number: "02",
    title: "Data & Databases",
    description:
      "Understanding how information is structured, stored, queried, and used to support decisions.",
  },
  {
    number: "03",
    title: "Systems & Processes",
    description:
      "Exploring how business requirements, workflows, and technology work together.",
  },
  {
    number: "04",
    title: "IT Foundations",
    description:
      "Building familiarity with networking, infrastructure, security, and IT operations.",
  },
];

export default function Focus() {
  return (
    <section
      id="focus"
      className="scroll-mt-28 border-t border-border py-24"
    >

      {/* SECTION HEADER */}

      <div className="max-w-2xl">

        <p className="font-mono text-xs tracking-widest text-accent">
          02 / AREAS OF INTEREST
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
          Exploring beyond one discipline.
        </h2>

        <p className="mt-5 leading-8 text-muted">
          My learning journey covers different areas of
          information technology, with a focus on understanding
          how each part connects.
        </p>

      </div>


      {/* FOCUS CARDS */}

      <div className="mt-12 grid gap-4 sm:grid-cols-2">

        {areas.map((area) => (

          <article
            key={area.number}
            
className="
  group relative overflow-hidden
  rounded-card border border-border
  bg-surface p-7 sm:p-9

  transition-all duration-300 ease-out

  hover:-translate-y-1
  hover:border-accent/40
  hover:bg-surface-raised
  hover:shadow-[0_12px_36px_rgba(0,0,0,0.18)]

  active:scale-[0.99]

  motion-reduce:transform-none
  motion-reduce:transition-none
"

          >

            <div className="flex items-center justify-between">

              <span className="font-mono text-xs text-accent">
                {area.number}
              </span>

              
<span
  aria-hidden="true"
  className="
    text-muted
    transition-all duration-300
    group-hover:-translate-y-1
    group-hover:translate-x-1
    group-hover:text-accent
  "
>
  ↗
</span>


            </div>


            <h3 className="mt-12 text-xl font-semibold">
              {area.title}
            </h3>


            <p className="mt-4 text-sm leading-7 text-muted">
              {area.description}
            </p>

          </article>

        ))}

      </div>

    </section>
  );
}