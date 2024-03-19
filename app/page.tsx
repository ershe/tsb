import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20 p-4">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Eric
        </span>
      </h1>
      <p className="mt-3 text-2xl text-gray-300">
        Hi everyone, check out our project for TSB
      </p>
      <h2 className="mt-24 font-bold text-gray-300 text-3xl">My Projects</h2>
      <section className="mt-4 flex flex-row flex-wrap gap-4">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border-2 border-gray-300 rounded-lg p-1"
            href={`/projects/${project.slug}`}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold">{project.name}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
