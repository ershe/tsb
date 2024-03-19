import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "gzl7qk9n",
  dataset: "production",
  title: "TSB",
  apiVersion: "2024-03-17",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
