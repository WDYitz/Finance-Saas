import db from "@/lib/prisma";

const CreateAccount = async (authId: string, name: string, plaidId?: string) => {
  const data = await db();
  return data.account.create({
    data: {
      userId: authId,
      plaidId,
      name,
    }
  });
}

export default CreateAccount;