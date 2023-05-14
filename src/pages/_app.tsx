import '@/styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import Layout from '@/layouts/layout'
import type { AppProps } from 'next/app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalizationProvider>
    </Authenticator.Provider>
  )
}
