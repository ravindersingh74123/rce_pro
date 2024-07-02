import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        const user = await prisma.users.findFirst({
          where: {
            email: credentials.username,
            password: credentials.password,
          },
        });
        if (!user) {
          return null;
        }

        return {
          id: "user1",
          email: user.email,
          pass: user.password,

        };
       
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
 
});

export { handler as GET, handler as POST };
