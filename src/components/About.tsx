import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="section-container bg-white" ref={elementRef as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`section-title text-center animate-slide-up ${isVisible ? 'visible' : ''}`}>About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-12">
          {/* Profile Image */}
          <div className={`flex justify-center md:justify-end animate-slide-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFlnJPFAXYDog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678947729717?e=1767830400&v=beta&t=Fv0eJzEK66cYtoUUou9GngcunhMRVBJub5b2eAb9MQU"
                alt="Marie Finella D. Alfuente"
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl border-4 border-white"
              />
            </div>
          </div>

          {/* About Text */}
          <div className={`md:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed animate-slide-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p>
              I'm Fin, and I help clients stay organized, focused, and on track.
            </p>

            <p>
              With years of experience in financial analysis, documentation, and
              remote team management, I've developed a skill set that translates
              perfectly into virtual assistance. I'm detail-oriented, proactive,
              and comfortable working independently across time zones.
            </p>

            <p>
              What drives me is continuous learning and meaningful contribution.
              I'm not just looking to complete tasks—I want to understand your
              needs, anticipate challenges, and deliver work that truly supports
              your success.
            </p>

            <p>
              Whether it's managing data, organizing workflows, or handling
              research and documentation, I approach every project with
              professionalism and care.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`text-center animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable</h3>
            <p className="text-gray-600">
              Consistent delivery and dependable support
            </p>
          </div>

          <div className={`text-center animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Organized</h3>
            <p className="text-gray-600">Structured approach to every task</p>
          </div>

          <div className={`text-center animate-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Proactive</h3>
            <p className="text-gray-600">
              Anticipating needs and taking initiative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
