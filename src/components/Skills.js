// components/Skills.js
const frontend = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-line" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" }
];

const backend = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "Flask", icon: "devicon-flask-original" }
];

const database = [
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-original colored" }
];

const ops = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Vercel", icon: "devicon-vercel-line" }
];

const Section = ({ title, skills }) => (
  <div className="text-left w-full">
    <h2 className="text-2xl font-bold mb-6 ml-10 pt-10 text-slate-400 border-b border-gray-600 pb-2">{title}</h2>
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center text-white">
          <i className={`${skill.icon} text-3xl`}></i>
          <span className="mt-2 text-lg font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40">
      <h2 className="text-4xl font-bold text-center text-slate-400">Skills</h2>
      <Section title="Front-end" skills={frontend} />
      <Section title="Back-end" skills={backend} />
      <Section title="Database" skills={database} />
      <Section title="Ops" skills={ops} />
    </section>
  );
}
