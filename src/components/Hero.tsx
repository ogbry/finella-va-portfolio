const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white pt-20 md:pt-0"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFlnJPFAXYDog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678947729717?e=1767830400&v=beta&t=Fv0eJzEK66cYtoUUou9GngcunhMRVBJub5b2eAb9MQU"
              alt="Marie Finella D. Alfuente"
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm Marie Finella D. Alfuente
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-primary-100">
          Your partner in getting things done—remotely, reliably, and with care.
        </p>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 text-primary-50 leading-relaxed">
          I'm an aspiring Virtual Assistant with a strong background in credit and collections,
          financial analysis, and remote team collaboration. I bring organization, attention to detail,
          and a genuine commitment to making your workload lighter and your goals achievable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-700 transition-colors"
          >
            View Services
          </a>
          <a
            href="/resume.pdf"
            download="Marie_Alfuente_Resume.pdf"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-primary-700 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
