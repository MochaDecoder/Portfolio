export default function Introduction() {
  return (
    <header className="px-6">
      <div className="max-w-4xl mx-auto flex gap-14">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hi, I'm Ong!
            <br />
            Full Stack Developer
          </h1>
          <p className="text-lg mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a href='#' className="bg-indigo-500 hover:bg-black transition text-white px-6 py-3 text-lg rounded">Check my work</a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-2.5 before:top-2.0 before:block before:absolute before:bg-indigo-300 relative z-0 before:rounded-full"
        >
          <img src='/assets/profile.jpg'
            width="240"
            height="240"
            alt="Image of Myself"
            className="z-10 relative rounded-full" />
        </span>
      </div>
    </header>
  )
}