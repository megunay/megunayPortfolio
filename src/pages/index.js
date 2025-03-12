import Head from 'next/head';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>meGunay | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <nav className="p-4 text-gray">
        <div className="container mx-auto flex justify-between">
          <Link href="/"><h1 className="text-xl font-bold">meGunay</h1></Link>
          
          <div>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/projects" className="mx-2">Projects</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
          </div>
        </div>
      </nav>
      
      <main className="text-center mt-20">
        <h1 className="text-5xl font-bold text-green-400">Hello, I'm Erkan. &#128075;</h1>
        <div className="text-3xl font-bold text-white">
        <Typewriter
            options={{
            strings: ['Hello!!', "I'm a Full-Stack Developer.","I create accessible, user friendly websites."],
            autoStart: true,
            loop: true,
            }}
        />
        </div>
        <Link href="/projects">
          <button className="mt-6 px-6 py-2 bg-green-400 text-black rounded-lg hover:bg-green-300">View My Work</button>
        </Link>
      </main>
    </div>
  );
}
