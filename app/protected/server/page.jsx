import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const ServerProtectedPage = async () => {
  
  // Use this when you need to see an active login session on a Server Side Component.
  // this 'getServerSession' method is by default given by Next-Auth
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("No Session Found!!!")
    // If no active session is found the page redirects to the below URL.
    redirect('/signin?callbackUrl=/protected/server')
  }
  else {
    // If active session is found, print the data on Server Console.
    console.log("Session Found --> ",JSON.stringify(session));
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>server-side</span>{' '}
          protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{session?.user?.name}</p>
      </div>
    </section>
  )
}

export default ServerProtectedPage;