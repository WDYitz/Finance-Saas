import db from "@/lib/prisma";

const GetAllAccounts = async () => {
  const data = await db();
  return data.account.findMany();
}

export default GetAllAccounts;