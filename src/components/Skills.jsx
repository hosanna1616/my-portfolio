function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Vue.js',
        'Tailwind CSS',
        'Responsive Design',
        'Bootstrap',
      ],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'C++', 'PHP', 'Java'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe Photoshop', 'Jmeter', 'Docker'],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
          <p className="mt-4 text-muted-foreground">Technologies and tools I work with</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1.5 text-sm font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

