import prisma from "@/server/database/client";

export async function createSession(data: ISession): Promise<ISession> {
  if (data.userId === undefined) {
    throw new Error("userId is undefined");
  }
  return await prisma.session.create({
    data: {
      userId: data.userId,
      authToken: data.authToken as string,
    },
  });
}

export async function getSessionByAuthToken(
  authToken: string
): Promise<ISession> {
  const user: IUser = (await getUserByAuthToken(authToken)) as unknown as IUser;

  return { authToken, user };
}

async function getUserByAuthToken(authToken: string): Promise<IUser> {
  return prisma.session
    .findUnique({
      where: {
        authToken: authToken,
      },
    })
    .user() as unknown as IUser;
}
