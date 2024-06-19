import { Hono } from "hono";
import GetAllAccounts from "../(factories)/get-accounts";

const app = new Hono()
  .get("/", async (c) => {
    const accounts = await GetAllAccounts();

    return c.json({ accounts })
  })

export default app;

