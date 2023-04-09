import { Inter } from 'next/font/google'
import { Authenticator } from '@aws-amplify/ui-react'

const inter = Inter({ subsets: ['latin'] })

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
