import path from "path";

export default ({ env }: { env: (key: string, fallback?: string) => string }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.resolve(process.cwd(), env("DATABASE_FILENAME", ".tmp/data.db")),
    },
    useNullAsDefault: true,
  },
});
