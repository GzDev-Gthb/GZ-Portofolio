export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-border py-24"
    >

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

        {/* SECTION LABEL */}

        <div>

          <p className="font-mono text-xs tracking-widest text-accent">
            01 / ABOUT ME
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            A broad view of technology.
          </h2>

        </div>


        {/* DESCRIPTION */}

        <div>

          <p className="text-lg leading-9 text-muted">
            I believe understanding technology means looking
            beyond code. It involves understanding how
            applications, data, infrastructure, and people
            work together.
          </p>


          <p className="mt-6 text-base leading-8 text-muted">
            As an Information Systems student, I&apos;m exploring
            different areas of IT to build a well-rounded
            understanding of how digital solutions are designed,
            developed, and used to solve real-world problems.
          </p>


          {/* INFORMATION */}

          <div className="mt-10 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">

            <div>

              <p className="font-mono text-[10px] tracking-widest text-subtle">
                EDUCATION
              </p>

              <p className="mt-3 text-sm font-medium">
                Information Systems
              </p>

            </div>


            <div>

              <p className="font-mono text-[10px] tracking-widest text-subtle">
                CURRENT STATUS
              </p>

              <p className="mt-3 text-sm font-medium">
                Undergraduate Student
              </p>

            </div>


            <div>

              <p className="font-mono text-[10px] tracking-widest text-subtle">
                CAREER DIRECTION
              </p>

              <p className="mt-3 text-sm font-medium">
                IT Generalist
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}