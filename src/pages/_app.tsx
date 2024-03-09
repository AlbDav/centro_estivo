import '@/styles/globals.css'
import Layout from '@/layouts/layout'
import type { AppProps } from 'next/app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import itLocale from 'date-fns/locale/it';
import { AuthProvider } from '@/contexts/AuthContext'

let BASE_URL = 'http://localhost:3000';
console.log(process.env);
if (process.env.USER_BRANCH) {
	if (process.env.USER_BRANCH === 'dev') {
		BASE_URL = 'https://develop.d1o5h2vlklcqfh.amplifyapp.com';
	} else {
		BASE_URL = 'https://main.d1o5h2vlklcqfh.amplifyapp.com';
	}
}
awsExports.oauth.redirectSignIn = `${BASE_URL}/account/`;
awsExports.oauth.redirectSignOut = `${BASE_URL}/account/`;

Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={itLocale}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LocalizationProvider>
		</AuthProvider>
	)
}
