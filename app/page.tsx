import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">

        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.05}>
          <About />
        </Reveal>

        <Reveal delay={0.05}>
          <Focus />
        </Reveal>

        <Reveal delay={0.05}>
          <Projects />
        </Reveal>

        <Reveal delay={0.05}>
          <Contact />
        </Reveal>

        <Reveal>
          <Footer />
        </Reveal>

      </main>
    </>
  );
}