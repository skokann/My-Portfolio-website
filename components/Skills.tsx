import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col mt-5 gap-10 h-auto justify-center py-24"
    >
      <div className="flex flex-col gap-1 w-full items-start justify-start">
        <h1 className="text-white text-3xl font-medium">My Skills</h1>
        <div className="block w-10 h-1 bg-white" />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full flex-1 gap-10">
        <span className=" text-gray-400 w-full lg:max-w-2xl text-md lg:text-xl">
          As a front-end developer and designer, I&apos;ve honed my skills in a
          versatile stack. From HTML and CSS to JavaScript and frameworks like
          React.
        </span>
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-5">
          <div className="flex flex-col gap-2 opacity-50 hover:opacity-100 duration-150">
            <h2 className="text-white text-xl">Front-End</h2>
            <Image
              src="/frontend.png"
              width={150}
              height={150}
              alt="Front-End stack"
            />
          </div>
          <div className="flex flex-col gap-2 opacity-50 hover:opacity-100 duration-150">
            <h2 className="text-white text-xl">Design</h2>
            <Image
              src="/design.png"
              width={150}
              height={150}
              alt="Front-End stack"
            />
          </div>
          <div className="flex flex-col gap-2 opacity-50 hover:opacity-100 duration-150">
            <h2 className="text-white text-xl">Database</h2>
            <Image
              src="/database.png"
              width={150}
              height={150}
              alt="Front-End stack"
            />
          </div>
          <div className="flex flex-col gap-2 opacity-50 hover:opacity-100 duration-150">
            <h2 className="text-white text-xl">Adobe Apps</h2>
            <Image
              src="/adobe.png"
              width={150}
              height={150}
              alt="Front-End stack"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
