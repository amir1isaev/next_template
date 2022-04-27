import Link from 'next/link'
import { FC } from 'react'
import * as S from '@/styles/pages/404'

const NotFound: FC<IProps> = () => {

	return (
		<S.NotFound>
			<S.Title>NOT FOUND</S.Title>
			<Link href='/'>На главную</Link>
		</S.NotFound>
	)
}

interface IProps {}
export default NotFound
