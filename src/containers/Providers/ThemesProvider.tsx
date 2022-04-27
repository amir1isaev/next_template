import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useGetTheme } from '@/hooks'
import { CommonStyles } from '@/styles'

const ThemesProvider: FC<IProps> = p => {
	const { children } = p
	const theme = useGetTheme()
	return (
		<ThemeProvider theme={theme}>
			<CommonStyles />
			{children}
		</ThemeProvider>
	)
}

interface IProps {
	children: ReactNode
}

export default ThemesProvider
