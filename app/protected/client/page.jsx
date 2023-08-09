'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const ClientProtectPage = () => {
  const { data: session } = useSession({
    // This prop makes sure that there must be a active session to access this page. If NO!, then redirect it to the
    // '/signin' with Query Params '?callbackUrl=/protected/client', once user Signs In it comes back to this page.
    required: true,

    // No need for this in Next Js 13.4 update.
    // onUnauthenticated() {
    //   redirect('/signin?callbackUrl=/protected/client')
    // }
  })

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client-side</span>{' '}
          protected page
        </h1>
        <h1 className='mt-4 font-medium'>You are logged in as:</h1>
        <h2 className='mt-10 font-medium'>Your Name</h2>
        <p className='mt-4'>{session?.user?.name}</p>
        <br />
        <h2 className='mt-4 font-medium'>Your Email</h2>
        <p className='mt-4'>{session?.user?.email}</p>
        <br />
        <h2 className='mt-4 font-medium'>Your Image</h2>
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          className='inline-block rounded-full mt-4'
          width={50}
          height={50}
        />
      </div>
    </section>
  )
}

export default ClientProtectPage