import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

export const orm = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "redditclone",
  logging: __prod__,
  entities: [Post],
});

const main = async () => {
  await orm.initialize();
  const currentDate = new Date();
  console.log(currentDate);
  await Post.insert({
    title: "first post",
  });
};

main();
