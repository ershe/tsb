import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "gzl7qk9n",
    dataset: "production",
    apiVersion: "2024-03-17",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
