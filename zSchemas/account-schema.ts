import { z } from 'zod';

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  plaidId: z.string()
});