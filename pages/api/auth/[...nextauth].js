import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials";
export default NextAuth({
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signIn",
    // signOut: "/auth/logout",
    // error: "/auth/signIn", // Error code passed in query string as ?error=
  },
  providers: [
    CredentialsProvider({
      credentials: {
        id: 'credentials',
        name: 'Credentials',  
        email: {},
        password: {},
      },
      async authorize(credentials) {
        let userObj = {}
          try{
            await fetch(`${process.env.API_URL}/auth/signIn`,{
              method:'POST',
              body: JSON.stringify({email:credentials.email,password:credentials.password}),
              headers: {
                'Content-Type': 'application/json',
                'token': process.env.WEBSITE_TOKEN
              }
            }).then((res)=>res.json())
            .then((user)=>{
        
            if (!user.id) {
              throw new Error('something wrong');
            }
  

              userObj = {
                id:user.id,
                email:user.email,
                name:user.firstName+' '+user.lastName,
                image:user.avatar,
                accountType:user.accountType,
                token:user.token
              }
              console.log(userObj)
              
              // return user
              return userObj
    
              // // thorw err if user data could not be retrieved
              // return new Error('something went wrong');
    
            })

        }catch(err){
          console.log('error here look')
          console.log(err)
          throw new Error('something went wrong')
        }

        return userObj
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks:{
       
    redirect:async({baseUrl})=>{
      return baseUrl+'/dashboard'
    },
    jwt:async({token,user})=>{
      console.log(token,user)
      user && (token.user = user)
      return token
    },
    session:async({session,token,user})=>{

      session.user = token.user
      return session

    },
      },
      secret:process.env.JWT_SECRET,
      jwt:{
        secret:process.env.JWT_SECRET,
        encryption:true
      },
      debug:true
});