import NextAuth from "next-auth";

export default NextAuth({
  providers: [],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
});
