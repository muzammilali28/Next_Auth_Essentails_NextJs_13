'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Button from './Button'

const GoogleSignInButton = () => {
  const searchParams = useSearchParams() // from next-navigation, creates a search param Object from the URL
  const callbackUrl = searchParams.get('callbackUrl') // gets the query params / search params after the  "?" '/signin?callbackUrl=/protected/client'

  return (
    <Button
      className='w-full'
      /* 
        Here the SignIn is of Google and the callbackUrl is
        provided additional to redirect to that specific route
        in the @app dirctory, so that once the user is logged in
        or Sign In, after the success redirect to the
        provided callbackUrl wwhich is like

        Exmaple:

        /signin?callbackUrl=/protected/client
        /signin?callbackUrl=/protected/server

        If you use this { callbackUrl: "/" } this means once the Login and Authentication is done and User has SignedIn
        then it will redirect to "/" -> which is the deafult "Home Page" 
      */
      onClick={() => signIn('google', { callbackUrl })}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        data-icon='google'
        className='mr-8 w-5'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'
      >
        <path
          fill='red'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
        ></path>
      </svg>
      Continue with Google
    </Button>
  )
}

export default GoogleSignInButton