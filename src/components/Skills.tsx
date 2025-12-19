const Skills = () => {
  const skillCategories = [
    {
      category: 'Technical Skills',
      skills: ['Microsoft Office (Proficient)', 'Excel & Data Analysis', 'Documentation & Reporting'],
    },
    {
      category: 'Professional Skills',
      skills: [
        'Budget Management',
        'Team Leadership & Management',
        'Communication & Collaboration',
        'Creative Problem-Solving',
        'Time Management',
      ],
    },
  ]

  const allSkills = [
    'Microsoft Office',
    'Documentation & Reporting',
    'Budget Management',
    'Team Leadership',
    'Communication',
    'Problem-Solving',
    'Time Management',
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title text-center">Skills</h2>

      <div className="max-w-4xl mx-auto">
        {/* Skill Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-white border-2 border-primary-200 text-primary-700 px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-50 hover:border-primary-300 transition-colors shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-primary-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
