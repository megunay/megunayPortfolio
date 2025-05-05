// components/About.js
export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-black text-white px-10 md:px-40">
      <div className="text-left">
        <h2 className="text-4xl font-bold text-slate-400 text-center">About Me</h2>
        <p className="text-lg mt-4 text-gray-300 w-full md:w-3/4 lg:w-1/2 ">
          Hi, I&rsquo;m <span className="text-blue-400 font-bold">Erkan</span>! I&rsquo;m a passionate Full-Stack Developer with a background in 
          Mechanical Engineering. I thrive on solving complex problems and continuously learning new technologies to build 
          efficient, scalable applications.
        </p>

        <p className="text-lg mt-4 text-gray-300">
          I specialize in modern web technologies, including:
        </p>

        <ul className="text-gray-300 mt-4 space-y-2">
          <li><span className="text-blue-400 font-semibold">Frontend:</span> HTML, CSS, Tailwind, Vue.js, Next.js, JavaScript</li>
          <li><span className="text-green-400 font-semibold">Backend:</span> Python, Node.js, Express.js, Flask</li>
          <li><span className="text-yellow-400 font-semibold">Database:</span> MongoDB, PostgreSQL, MySQL</li>
          <li><span className="text-red-400 font-semibold">Ops:</span> Git, Docker, AWS, Vercel</li>
        </ul>

        <p className="text-lg mt-4 text-gray-300 w-1/2">
          I&rsquo;m a hardworking and enthusiastic developer who enjoys tackling challenges and staying ahead in the 
          ever-evolving tech world. When I&rsquo;m not coding, I spend quality time with my lovely wife and baby boy, 
          who motivate me every day. Let&rsquo;s connect and build something amazing together! 🚀
        </p>

        <h3 className="text-2xl font-bold mt-8 text-slate-400">Education</h3>
        <div className="mt-4 text-gray-300">
          <p><span className="text-green-300 font-semibold">2010-2015:</span> Karabuk University (Turkey) - B.Sc. in Mechanical Engineering</p>
          <p><span className="text-green-300 font-semibold">2016-2018:</span> TAFE NSW (Sydney, Australia) - Advanced Diploma in Mechanical Engineering</p>
          <p><span className="text-green-300 font-semibold">2020-2022:</span> Hacettepe University (Turkey) - Master&rsquo;s in Software Engineering (Incomplete)</p>
        </div>

        <h3 className="text-2xl font-bold mt-8 text-slate-400">Experience</h3>
        <div className="mt-4 text-gray-300">
          <p><span className="text-green-300 font-semibold">2020-2021:</span> GUN-KA Machinery (Turkey) - Production Engineer</p>
          <p><span className="text-green-300 font-semibold">2021-2023:</span> GUN-KA Machinery (Turkey) - Production Manager</p>
          <p><span className="text-green-300 font-semibold">2023-:</span> Archimedes Schools (Vietnam) - STEM Teacher</p>
        </div>
      </div>
    </section>
  );
}
