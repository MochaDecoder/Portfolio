import Image from 'next/image';
import Link from 'next/link';

export default function Introduction() {
  return (
    <header className="px-6">
      <div className="max-w-4xl mx-auto flex gap-14 flex-col-reverse md:flex-row">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hi, I am Ong!
            <br />
            Full Stack Developer
          </h1>
          <p className="text-lg mb-6">
            I have more than 6 years of experience in Frontend and Backend website development. Capable of analyzing, designing, and developing systems from start to finish. I am always eager to learn new technologies. Special Interest with web3 and blockchain technology, I wish to work with an organization that values technology and includes people who are enthusiastic about technology.
          </p>
          <Link href='/works' className="bg-indigo-500 hover:bg-black transition text-white px-6 py-3 text-lg rounded">Check my work</Link>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-2.5 before:top-2.0 before:block before:absolute before:bg-indigo-300 relative z-0 before:rounded-full"
        >
          <Image src='/assets/profile.jpg'
            width="240"
            height="240"
            alt="Image of Myself"
            className="z-10 relative rounded-full" />
        </span>
      </div>
    </header>
  )
}