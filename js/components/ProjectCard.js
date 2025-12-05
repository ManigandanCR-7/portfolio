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
    link: "#https://neuw-bloom.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Management App",
    description: "Application for managing investment portfolios with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["Angular", "TypeScript", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Interactive weather application with 7-day forecasts and location-based services.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "APIs", "CSS3"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team integration.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description: "Mobile application for tracking fitness goals, nutrition, and health metrics.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "GraphQL", "AWS"],
    link: "#",
    github: "#"
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


