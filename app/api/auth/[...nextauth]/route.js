import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  /*
    https://next-auth.js.org/errors#jwt_session_error decryption operation failed {
    message: 'decryption operation failed',
    stack: 'JWEDecryptionFailed: decryption operation failed\n' +
      '    at gcmDecrypt (webpack-internal:///(sc_server)/./node_modules/jose/dist/node/esm/runtime/decrypt.js:81:15)\n' +
      '    at decrypt (webpack-internal:///(sc_server)/./node_modules/jose/dist/node/esm/runtime/decrypt.js:104:20)\n' +
      '    at flattenedDecrypt (webpack-internal:///(sc_server)/./node_modules/jose/dist/node/esm/jwe/flattened/decrypt.js:127:90)\n' +
      '    at async compactDecrypt (webpack-internal:///(sc_server)/./node_modules/jose/dist/node/esm/jwe/compact/decrypt.js:22:23)\n' +
      '    at async jwtDecrypt (webpack-internal:///(sc_server)/./node_modules/jose/dist/node/esm/jwt/decrypt.js:12:23)\n' +
      '    at async Object.decode (webpack-internal:///(sc_server)/./node_modules/next-auth/jwt/index.js:44:26)\n' +
      '    at async Object.session (webpack-internal:///(sc_server)/./node_modules/next-auth/core/routes/session.js:25:34)\n' +
      '    at async AuthHandler (webpack-internal:///(sc_server)/./node_modules/next-auth/core/index.js:161:37)\n' +
      '    at async NextAuthRouteHandler (webpack-internal:///(sc_server)/./node_modules/next-auth/next/index.js:49:30)\n' +
      '    at async NextAuth._args$ (webpack-internal:///(sc_server)/./node_modules/next-auth/next/index.js:83:24)\n' +
      '    at async eval (webpack-internal:///(sc_server)/./node_modules/next/dist/server/future/route-modules/app-route/module.js:242:37)',
    name: 'JWEDecryptionFailed'
    }

    if you get the above Error, first check the '.env.local' or '.env.exmaple' then add this blow line.
  */

  secret: process.env.NEXTAUTH_SECRET,  // This line is neccessary if you want 'getServerSession()' to work on SSR components
                                        // You need to provide the NEXTAUTH_SECRET in ".env.local" with "any" String value you like.

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,        // You will be needing it, search on google how to get this, define it in ".env.local" file at Root level.
      clientSecret: process.env.GOOGLE_CLIENT_SECRET // You will be needing it as well, define it in ".env.local" file at Root level.
    })
  ],
  /* 
  This Pages property overwrites the default action of SignIn
  which is by default the normal Google Login SignIn model.
  If we define the pages here, it basically overrides the default
  behaviour and forces NextAuth to render our custom page
  i.e the 'signin/page.jsx'
  */
  pages: {
    signIn: '/signin',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }