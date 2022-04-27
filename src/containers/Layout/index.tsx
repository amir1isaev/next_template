import { FC, ReactNode } from 'react'
import Footer from '@/simple/Footer'
import Header from '@/simple/Header'
import Main from '@/simple/Main'
import MyHead from '../MyHead'
import Provider from '../Providers'
import * as S from './styled'

const Layout: FC<IProps> = p => {
	const { children } = p
	return (
		<Provider>
			<MyHead />
			<S.Layout>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</S.Layout>
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
