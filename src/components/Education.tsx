const Education = () => {
  return (
    <section id="education" className="section-container bg-white">
      <h2 className="section-title text-center">Education</h2>

      <div className="max-w-3xl mx-auto">
        <div className="card border-l-4 border-primary-500">
          <div className="flex items-start">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor's Degree</h3>
              <p className="text-lg text-primary-600 font-semibold mb-2">
                Bicol University – College of Business, Economics, and Management
              </p>
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
                2007 – 2012
              </span>
            </div>
          </div>
        </div>

        {/* Additional qualifications or certifications can be added here */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
