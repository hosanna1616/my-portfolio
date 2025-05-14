import { ExternalLink, Github } from "lucide-react"

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'jeon beauty',
      description:
        "I designed Jeon Beauty to showcase a range of high-quality makeup products, emphasizing both aesthetics and functionality. The site features a modern and engaging layout that reflects the brand's commitment to beauty and innovation.",
      image: '/images/j1.png',
      tags: ['Html', 'css', 'javascript', 'tailwind'],
      liveLink: 'https://hosanna1616.github.io/jeon/home.html',
      githubLink: 'https://hosanna1616.github.io/jeon/home.html',
    },
    {
      id: 2,
      title: 'Mafi Clothes',
      description:
        "I created a dynamic and engaging platform that showcases the brand's identity through modern web design principles. Incorporating smooth animations throughout the site enhances visual interest and guides users through the content seamlessly. These animations are designed to be subtle yet impactful, ensuring they do not distract from the main message but rather complement the overall user experience",
      image: 'public/images/j2.png',
      tags: ['Html', 'css', 'javascript', 'Bootstrap'],
      liveLink: 'https://example.com',
      githubLink: 'https://hosanna1616.github.io/mafimafi/h.html',
    },
    {
      id: 3,
      title: 'Ai Recruiter Agent',
      description:
        'A task management application with drag-and-drop functionality built with React and TypeScript.',
      image: '/images/p3.png',
      tags: ['JavaScript', 'React', 'vite', 'TailwindCSS'],
      liveLink: 'https://github.com/hosanna1616',
      githubLink: 'https://github.com/hosanna1616',
    },
    {
      id: 3,
      title: 'Helder Technology',
      description:
        'I  design and develop impactful, user-friendly websites that elevate businesses in the digital landscape. With a keen eye for innovation and functionality, I craft professional websites tailored to meet unique brand needs and customer expectations. Whether building from scratch or refining existing websites, I ensure seamless performance, modern design, and engaging user experience—helping businesses establish a strong online presence.',
      image: '/images/he.png',
      tags: ['JavaScript', 'React', 'typescript', 'TailwindCSS'],
      liveLink: 'https://v0-helder-technoogy-website-rx13fz.vercel.app/',
      githubLink: 'https://github.com/hosanna1616',
    },
    {
      id: 3,
      title: 'Ai Environment Analayzer',
      description:
        'I  design and develop impactful, user-friendly websites that elevate businesses in the digital landscape. With a keen eye for innovation and functionality, I craft professional websites tailored to meet unique brand needs and customer expectations. Whether building from scratch or refining existing websites, I ensure seamless performance, modern design, and engaging user experience—helping businesses establish a strong online presence..',
      image: '/images/e.png',
      tags: ['JavaScript', 'React', 'typescript', 'TailwindCSS'],
      liveLink: 'https://ubiquitous-pastelito-1a2dbb.netlify.app/',
      githubLink: 'https://github.com/hosanna1616',
    },
    {
      id: 3,
      title: 'Dental Managment System',
      description:
        'I am developing a Dental Management System that simplifies and optimizes the operations of dental clinics. This system is designed to provide an intuitive and efficient platform for managing patient records, appointment scheduling, treatment plans, billing, and clinic workflow.',
      image: '/images/p.png',
      tags: ['JavaScript', 'React', 'typescript', 'next js', 'TailwindCSS'],
      liveLink: 'https://dental-3qil.vercel.app/',
      githubLink: 'https://dental-3qil.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-accent/20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-muted-foreground">Check out some of my recent work</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    GitHub <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

