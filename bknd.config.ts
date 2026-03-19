import { em, entity, text, boolean } from "bknd";
import type { NextjsBkndConfig } from "bknd/adapter/nextjs";

const schema = em({
  todos: entity("todos", {
    title: text(),
    done: boolean(),
  }),
});

// register your schema to get automatic type completion
type Database = (typeof schema)["DB"];
declare module "bknd" {
  interface DB extends Database {}
}
export default {
    connection: {
    url: "file:data.db",
  },
  options: {
    // the seed option is only executed if the database was empty
    seed: async (ctx) => {
      // create some entries
      await ctx.em.mutator("todos").insertMany([
        { title: "Learn bknd", done: true },
        { title: "Build something cool", done: false },
      ]);

      // and create a user
      await ctx.app.module.auth.createUser({
        email: "test@bknd.io",
        password: "12345678",
      });
    },
  },
  config: {
    data: schema.toJSON(),
    auth: {
      enabled: true,
      jwt: {
        alg: "HS256",
        secret: "e79f40806aee76b95f0e2e5789eea",
      },
    },
  },
} satisfies NextjsBkndConfig;