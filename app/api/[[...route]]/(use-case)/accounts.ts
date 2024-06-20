import { AccountSchema } from "@/zSchemas/account-schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from '@hono/zod-validator';
import { Hono } from "hono";
import CreateAccount from "../(factories)/create-account";
import GetAccount from "../(factories)/get-account";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401)
    }

    const accounts = await GetAccount(auth?.userId);

    if (!accounts) {
      return c.json({ message: "No accounts found" })
    }

    return c.json({ accounts })
  })
  .post("/", clerkMiddleware(), zValidator("json", AccountSchema.pick({
    name: true
  })), async (c) => {
    const auth = getAuth(c);
    const values = c.req.valid("json");

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401)
    }

    const account = (await CreateAccount(auth?.userId, values.name));


    return c.json({})
  })

export default app;

