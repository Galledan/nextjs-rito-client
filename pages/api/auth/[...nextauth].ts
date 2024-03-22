import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import prisma from "@/libs/prismadb"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        name: { label: 'name', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            name: credentials.name
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);