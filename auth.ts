import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcryptjs from 'bcryptjs';
import { Usuario } from "./prisma/lib/generated/prisma-client/client";
import { prisma } from "./app/lib/prisma";

async function getUser(email : string) : Promise<Usuario | undefined> {
    try{
        const user = await prisma.usuario.findUnique({
            where:{
                email: email
            }
        })
        return user || undefined;
    }catch (error){
        console.log('Failed to fetch user:', error);
        throw new Error('Failed to fetch user');
    }
}

export const {handlers, auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);

                if(parsedCredentials.success){
                    const {email, password} = parsedCredentials.data;
                    const user = await getUser(email);
                    if(!user) return null;

                    const passwordMatch = await bcryptjs.compare(password, user.senha);
                    if(passwordMatch) return user;
                }

                return null;
            },
        }),
    ]
});