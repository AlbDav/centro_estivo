import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import Layout from '@/layouts/layout'
import type { AppProps } from 'next/app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Authenticator.Provider>
  )
}
