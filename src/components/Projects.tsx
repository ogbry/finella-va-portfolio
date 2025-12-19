import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation()

  const projects = [
    {
      title: 'Project Placeholder 1',
      description: 'Add your Canva design project here with a brief description of the work.',
      category: 'Graphic Design',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+1',
    },
    {
      title: 'Project Placeholder 2',
      description: 'Showcase your creative Canva projects and designs.',
      category: 'Social Media',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+2',
    },
    {
      title: 'Project Placeholder 3',
      description: 'Display your portfolio of visual content and branding materials.',
      category: 'Branding',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+3',
    },
    {
      title: 'Project Placeholder 4',
      description: 'Feature presentations, infographics, or marketing materials.',
      category: 'Marketing',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+4',
    },
    {
      title: 'Project Placeholder 5',
      description: 'Highlight your design skills with various project examples.',
      category: 'Design',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+5',
    },
    {
      title: 'Project Placeholder 6',
      description: 'Add more projects to build a comprehensive portfolio.',
      category: 'Content Creation',
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Project+6',
    },
  ]

  return (
    <section
      id="projects"
      className="section-container bg-white"
      ref={elementRef as React.RefObject<HTMLElement>}
    >
      <h2 className={`section-title text-center animate-slide-up ${isVisible ? 'visible' : ''}`}>
        Canva Projects
      </h2>

      <p
        className={`text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg animate-slide-up ${
          isVisible ? 'visible' : ''
        }`}
        style={{ transitionDelay: '0.1s' }}
      >
        A showcase of creative design work and visual content created with Canva.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`card group cursor-pointer overflow-hidden animate-scale ${
              isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>

            <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              <span className="text-sm">View Project</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 italic">
          Replace these placeholders with your actual Canva projects. You can link to your Canva portfolio or
          embed specific designs.
        </p>
      </div>
    </section>
  )
}

export default Projects
