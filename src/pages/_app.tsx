import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import Layout from '@/layouts/layout'
import type { AppProps } from 'next/app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import { AuthContext, AuthDispatchContext, authReducer } from '@/utils/AuthContext'
import { useReducer } from 'react'
Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
  const [auth, dispatch] = useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}
