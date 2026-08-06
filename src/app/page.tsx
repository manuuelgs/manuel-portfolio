import Header from "@/components/Header";
import SelectedWork from "@/components/selectedwork";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="portfolio">

      <Header />

      <section className="hero">

        <div className="hero-main">

          <p className="section-label mono">
            01 — INTRO
          </p>

          <h1>
            MANUEL GARCIA
            <br />
            SANDOVAL
          </h1>

          <div className="hero-meta">

            <p>
              Graphic Designer / Creative / Developer
            </p>

            <p className="location mono">
              CARACAS / VENEZUELA
            </p>

          </div>

        </div>

      </section>


      <SelectedWork />
      <Services />

  

<About />

<Contact />

    </main>
  );
}