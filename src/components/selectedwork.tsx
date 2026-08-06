const projects = [
  {
    title: "GATAPRETADESIGN.COM",
    category: "WEB DESIGN / DEV",
    image: "/projects/gatapreta-hero.png",
  },
  {
    title: "CCS MEAT CO",
    category: "VISUAL",
    image: null,
  },
  {
    title: "BOM CREATIVE STUDIOS",
    category: "BRANDING",
    image: null,
  },
];


export default function SelectedWork() {
  return (
    <section className="selected-work" id="work">

      <div className="section-heading">
        <span className="mono">
          01 — SELECTED WORK
        </span>
      </div>


      <div className="projects-grid">

        {projects.map((project) => (

          <article 
            className="featured-project"
            key={project.title}
          >

            <div className="project-image">

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <span className="mono">
                  PROJECT IMAGE
                </span>
              )}

            </div>


            <div className="featured-info">

              <h2>
                {project.title}
              </h2>

              <span className="mono">
                {project.category}
              </span>

            </div>


          </article>

        ))}

      </div>


    </section>
  );
}