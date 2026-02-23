import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"




const userList = [
  { name: "hablu", password: "1234"},
  { name: "dablu", password: "5678"},
  { name: "bablu", password: "9101"},
]


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Email and Password',
  
    //from inputs

    credentials: {
      email: { label: "Email", type: "email", placeholder: "Enter email" },
      password: { label: "Password", type: "password", placeholder: "Enter Password" },
      
    },
    async authorize(credentials, req) {


      const {username, password, secretCode} = credentials;

      const user = userList.find(u => u.name == username)

      if(!user) return null

      const isPasswordOk = user.password == password;

      if(isPasswordOk){
        return user
      }
      
      
      // Return null if user data could not be retrieved
      return null
    }
  })
    // ...add more providers here
  ],
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}