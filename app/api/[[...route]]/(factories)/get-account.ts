import db from "@/lib/prisma";

const GetAccount = async (authId?: string) => {
  const data = await db();
  return data.account.findFirst({
    where: {
      userId: {
        equals: authId 
      }
    }
  });
}

export default GetAccount;