import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about my journey as a Full-Stack Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <nav className="bg-gray-900 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div>
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/projects" className="mx-2">Projects</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
          </div>
        </div>
      </nav>
      
      <main className="text-center mt-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg mt-4 px-10 md:px-40">
          Hi, I'm [Your Name], a passionate Full-Stack Developer specializing in modern web technologies like Node.js and Next.js. With experience in building responsive and high-performing applications, I love solving complex problems and bringing ideas to life through code.
        </p>
        <p className="text-lg mt-4 px-10 md:px-40">
          I am constantly learning and staying up-to-date with the latest industry trends to enhance my skills. My goal is to create impactful digital experiences that are both functional and visually appealing.
        </p>
      </main>
    </div>
  );
}
