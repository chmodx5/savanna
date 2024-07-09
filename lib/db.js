import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

const globalThis = typeof global !== "undefined" ? global : window;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
