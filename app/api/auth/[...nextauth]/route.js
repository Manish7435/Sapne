import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions = {

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            

            async authorize(credentials){
                const {email, password} = credentials;
                try{
                await connectToDatabase()
                    const user = await User.findOne({email})
                    if(!user){
                        return null
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password )
                    if(!passwordMatch){
                        return null
                    }
                    
                    return user

               }catch(e){
                    console.log('error:', e)
               }
               
            }
        })
    ],
    session:{
        strategy : 'jwt'
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user._id.toString();
            }
            return token;
        },

        async session(session, token) {
            if (token) { 
                session.user = token;
            }
            return session;
          }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages : {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)

export {handler as POST, handler as GET}