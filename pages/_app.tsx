import type { AppProps } from 'next/app'
import Layout from '@/containers/Layout'
import { wrapper } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default wrapper.withRedux(MyApp)
