import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { z } from "zod";

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  });
}).get('/hello/:name', zValidator("param", z.object({
  name: z.string()
})), (c) => {
  const text = c.req.valid("param");

  return c.json({
    message: `Hello ${text}!`,
  })
});

export const GET = handle(app);
export const POST = handle(app);