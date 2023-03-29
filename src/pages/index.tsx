import { Inter } from 'next/font/google'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

const inter = Inter({ subsets: ['latin'] })

import awsExports from '../aws-exports'
Amplify.configure(awsExports)

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }: any) => (
        <>
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
        </>
      )}
    </Authenticator>
  )
}
