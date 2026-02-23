import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { authOptions } from "@/lib/authOptions";

const userList = [
  { name: "hablu", password: "1234"},
  { name: "dablu", password: "5678"},
  { name: "bablu", password: "9101"},
]




const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}