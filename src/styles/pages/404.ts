import styled from 'styled-components'

const NotFound = styled.div<INotFoundProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	flex-direction: column;
	a {
		font-size: 18px;
		padding: 10px;
		color: ${({ theme }) => theme.colors.primary};
		&:hover {
			color: ${({ theme }) => theme.colors.hoverPrimary};
		}
	}
`
const Title = styled.div`
	font-size: 22px;
	color: ${({ theme }) => theme.colors.font};
`

interface INotFoundProps {}
export { NotFound, Title }
