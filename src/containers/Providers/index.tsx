import { FC, ReactNode } from 'react'
import ThemesProvider from './ThemesProvider'

const Provider: FC<IProps> = p => {
	const { children } = p
	return <ThemesProvider>{children}</ThemesProvider>
}

interface IProps {
	children: ReactNode
}
export default Provider
