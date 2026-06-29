export const initialData = {
  name: "ALEXANDER WRIGHT",
  jobTitle: "Senior Software Engineer",
  phone: "+1 (555) 123-4567",
  email: "alexander.wright@example.com",
  linkedin: "Alexander Wright",
  linkedinUrl: "https://linkedin.com/in/alexander-wright-demo",
  location: "San Francisco, CA",
  summary: "Results-driven Software Engineer with 5+ years of experience architecting scalable, data-intensive web applications. Proficient in modern JavaScript frameworks (React, Next.js, Node.js) and cloud infrastructure (AWS, Vercel). Recognized for leading cross-functional teams to deliver high-impact products, optimizing database query performance by 40%, and seamlessly integrating third-party APIs to enhance overall user experience.",
  skills: [
    { text: "React.js & Next.js", highlighted: true },
    { text: "Node.js & Express", highlighted: true },
    { text: "TypeScript", highlighted: true },
    { text: "JavaScript (ES6+)", highlighted: false },
    { text: "PostgreSQL", highlighted: false },
    { text: "MongoDB", highlighted: false },
    { text: "AWS (EC2, S3)", highlighted: false },
    { text: "Docker", highlighted: false },
    { text: "Tailwind CSS", highlighted: false },
    { text: "GraphQL", highlighted: false },
    { text: "Redis", highlighted: false },
    { text: "Vercel Deployment", highlighted: false }
  ],
  interests: [
    { name: "Marathon Running", icon: "gym" },
    { name: "Photography", icon: "default" },
    { name: "Open Source Tech", icon: "tech" }
  ],
  projects: [
    {
      title: "FinTrack - Personal Finance Dashboard",
      linkText: "Live ↗",
      linkUrl: "https://example.com",
      date: "October 2023",
      tech: "React, Node.js, PostgreSQL",
      points: [
        "Architected a real-time financial tracking dashboard used by 10,000+ daily active users.",
        "Integrated Plaid API for secure, real-time banking transaction synchronization.",
        "Reduced initial page load time by 30% through advanced data caching strategies."
      ]
    },
    {
      title: "HealthConnect Portal",
      linkText: "Live ↗",
      linkUrl: "https://example.com",
      date: "February 2023",
      tech: "Next.js, TypeScript, Tailwind",
      points: [
        "Developed a HIPAA-compliant patient management portal for local clinics.",
        "Implemented secure WebRTC video conferencing for telehealth appointments.",
        "Designed accessible, highly responsive user interfaces achieving a 99% Lighthouse score."
      ]
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      date: "03/2021 - Present",
      points: [
        "Led a team of 4 engineers to migrate a legacy AngularJS monolithic application to a modern Next.js micro-frontend architecture.",
        "Established CI/CD pipelines using GitHub Actions, cutting deployment times from 45 minutes to under 5 minutes.",
        "Mentored junior developers and conducted weekly technical workshops on React performance optimization."
      ]
    },
    {
      role: "Software Developer",
      company: "Innovate Web Systems",
      date: "06/2018 - 02/2021",
      points: [
        "Developed RESTful APIs serving over 1M requests daily using Node.js and Express.",
        "Collaborated with product designers to implement pixel-perfect user interfaces based on Figma specifications.",
        "Optimized MongoDB aggregations, resolving significant latency bottlenecks in the reporting engine."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University of Technology",
      date: "08/2014 - 05/2018"
    }
  ],
  extraProjects: [
    { title: "Taskify CLI", linkUrl: "https://example.com", desc: "Terminal-based productivity tracker." },
    { title: "React UI Library", linkUrl: "https://example.com", desc: "Open source components library." }
  ],
  certifications: [
    { role: "AWS Certified Developer – Associate", school: "Amazon Web Services", date: "Completed 2022" },
    { role: "Advanced React Patterns", school: "Frontend Masters", date: "Completed 2021" }
  ],
  volunteering: [
    { role: "Technical Mentor", school: "Code for Tomorrow Bootcamp", date: "2020 - Present" },
    { role: "Open Source Contributor", school: "Various GitHub Repositories", date: "Ongoing" }
  ],
  customSections: []
};
