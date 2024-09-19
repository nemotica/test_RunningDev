import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { HttpsProxyAgent } from "https-proxy-agent"; // 添加这一行

const proxyUrl = "http://127.0.0.1:1087";
const proxyAgent = new HttpsProxyAgent(proxyUrl);

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET as string,
      // httpOptions: {
      //   timeout: 10000,
      //   //agent: proxyAgent,
      // },
    }),
  ],

  //debug: true,

  // pages: {
  //   //signIn: "/auth/login",
  // },
};

// // 添加日志
// console.log("NextAuth Options:", JSON.stringify(authOptions, null, 2));
// console.log("Google Provider Config:", JSON.stringify(authOptions.providers[1], null, 2));