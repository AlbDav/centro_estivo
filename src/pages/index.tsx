import { Authenticator } from '@aws-amplify/ui-react'

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }: any) => (
        <>
            <main>
              <h1>Ciao {user.username}, purtroppo si, sei sloggato. Vuoi sloggarti!?</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
        </>
      )}
    </Authenticator>
  )
}
