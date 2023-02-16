import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/graphql/generated.ts": {
      // preset: "client",
      plugins: ["typescript", "typescript-operations"],
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};

export default config;
