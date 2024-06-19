import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { HTTPException } from 'hono/http-exception';
import GetAllAccounts from "../(factories)/get-accounts";

const app = new Hono()
  .get("/", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      throw new HTTPException(401, {
        res: c.json({ error: "Unauthorized" }, 401)
      });
    }

    const accounts = await GetAllAccounts();

    return c.json({ accounts })
  })

export default app;

