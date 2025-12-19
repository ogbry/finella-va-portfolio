const Experience = () => {
  const experiences = [
    {
      title: 'Senior Associate – Content Analyst (Remote)',
      company: 'Innodata Knowledge Services Inc',
      period: '2024 – Present',
      responsibilities: [
        'Collect and curate news articles based on specific topics and keywords',
        'Categorize and tag content accurately for easy retrieval',
        'Read and summarize articles to extract key ideas and themes',
        'Organize and analyze data using Excel',
        'Collaborate constructively with remote team members',
      ],
    },
    {
      title: 'Credit and Collection Officer',
      company: 'Toyota Albay',
      period: '2019 – 2023',
      responsibilities: [
        'Assessed customer credit files and monitored receivables',
        'Collected and organized loan documentation for underwriting',
        'Improved team communication and collaboration',
        'Prioritized tasks to meet service and collection goals efficiently',
      ],
    },
    {
      title: 'Municipal Financial Analyst',
      company: 'DSWD – KALAHI CIDSS Program',
      period: '2014 – 2018',
      responsibilities: [
        'Evaluated and monitored budget performance',
        'Tracked expenses with accuracy and transparency',
        'Identified inefficiencies and recommended process improvements',
        'Planned and executed financial processes',
        'Assessed financial data to determine budget requirements',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title text-center">Work Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card border-l-4 border-primary-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <p className="text-lg text-primary-600 font-semibold">{exp.company}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
