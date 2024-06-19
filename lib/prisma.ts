import { Pool } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'

export const runtime = 'edge'

const db = async () => {
  const neon = new Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaNeon(neon)
  const prisma = new PrismaClient({ adapter })

  return prisma;
}

export default db;