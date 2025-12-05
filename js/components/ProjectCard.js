function ProjectCard({ project, delay = 0 }) {
  return (
    <div
      className="blog-card bg-white fade-in"
      style={{ animationDelay: `${delay}s` }} data-id="zdn0titxn" data-path="js/components/ProjectCard.js">

      <div className="blog-card-image" data-id="cumgc92vb" data-path="js/components/ProjectCard.js">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover" data-id="bttp150bu" data-path="js/components/ProjectCard.js" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-id="x7eoxtrvg" data-path="js/components/ProjectCard.js">
          <a href={project.link} className="px-4 py-2 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all m-2" data-id="1k6cgcx5r" data-path="js/components/ProjectCard.js">
            View Project
          </a>
        </div>
      </div>
      
      <div className="blog-card-content" data-id="7s8the5kj" data-path="js/components/ProjectCard.js">
        <div className="flex flex-wrap mb-3" data-id="5mlrkkz74" data-path="js/components/ProjectCard.js">
          {project.technologies.map((tech, index) =>
          <span
            key={index}
            className="blog-tag bg-serene-50 text-serene-700" data-id="n28mxkoqp" data-path="js/components/ProjectCard.js">
              {tech}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-serene-600 transition-all" data-id="ed0wc3akl" data-path="js/components/ProjectCard.js">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4" data-id="94bwfmjck" data-path="js/components/ProjectCard.js">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between" data-id="ppjrm3qys" data-path="js/components/ProjectCard.js">
          <div className="flex items-center" data-id="r2g17t9ep" data-path="js/components/ProjectCard.js">
            <span className="text-sm text-gray-500" data-id="02qca9qwt" data-path="js/components/ProjectCard.js">{project.date}</span>
          </div>
        
        </div>
      </div>
    </div>);
}

function Projects() {
  const projects = [
  {
    id: 1,
    title: "Neuw-bloom Webapp",
    description: "Calm series - mobile webapp for Relaxing & Stress Relief",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "CSS", "Supabase","Netlify"],
    link: "https://neuw-bloom.netlify.app/",
  },
  {
    id: 2,
    title: "Talk like an pro website & Webapp ",
    description: "Application for managing & training the Candidats to be more Professional Using Daily plan ",
    image: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb2Zlc3Npb25hbCUyMExhcHRvcCUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    technologies: ["Angular", "TypeScript", "Supabase","php"],
    link: "https://talk-like-pro.netlify.app/",
  },
  {
    id: 3,
    title: "OTT'tz - desktop Webapp ",
    description: "Interactive VR application with Watching Movies on Theatre Experience With Alive ",
    image: "https://plus.unsplash.com/premium_photo-1661494303838-65d9d6454487?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRoZWF0cmUlMjBFbmpveXxlbnwwfHwwfHx8MA%3D%3D",
    technologies: ["JavaScript", "A-frame","Three.js","CSS3"],
    link: "https://otttz.netlify.app/",
  },
  {
    id: 4,
    title: "VR Home - Walkthrough",
    description: "Collaborative project With Integration VR into Home 3D Space.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VlIlMjBoZWFkc2V0fGVufDB8fDB8fHww",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://vrmob.netlify.app/",
  },
  {
    id: 5,
    title: "OTT'tz - 2.0 ( Prebook Website)",
    description: "Web 2.0 application for OTT'tz Prebook website ",
    image: "https://images.unsplash.com/photo-1664748512003-8820b08d8161?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvb2wlMjBXZWJzaXRlJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
    technologies: ["React Native", "Typescript", "CSS3"],
    link: "https://otttz-prebook.netlify.app/",
  },];

  return (
    <section id="projects" className="py-16 bg-serene-50/50" data-id="06kx9xnht" data-path="js/components/ProjectCard.js">
      <div className="blog-container" data-id="vb98sdg7c" data-path="js/components/ProjectCard.js">
        <div className="text-center mb-12" data-id="vam6eohzu" data-path="js/components/ProjectCard.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="3uu55w99k" data-path="js/components/ProjectCard.js">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="d1zox3pfm" data-path="js/components/ProjectCard.js">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="jy62q4ncr" data-path="js/components/ProjectCard.js">
            A selection of my recent work showcasing my skills in web development,
            design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="0af776bcw" data-path="js/components/ProjectCard.js">
          {projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} delay={0.1 * index} />
          )}
        </div>
      </div>
    </section>);

}




