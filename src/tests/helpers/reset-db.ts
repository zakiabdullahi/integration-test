import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function resetDB() {
  await prisma.$transaction([prisma.request.deleteMany()]);
}
