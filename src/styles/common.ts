import { createGlobalStyle } from 'styled-components'

const CommonStyles = createGlobalStyle`
* {
		padding: 0;
		margin: 0;
		border: 0;
		/* -webkit-tap-highlight-color: transparent; */
		/* background: none; */
	}
	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	aside {
		display: block;
	}
	html,
	body {
		height: 100%;
		width: 100%;
		font-size: 100%;
		line-height: 1;
		font-size: 14px;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		background-color: ${({ theme }) => theme.colors.bg};
		font-family: 'Commissioner', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
			Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
	#root {
		height: 100%;
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
	}
	
	#__next{
		min-height:100% ;
		display:flex;
		flex-direction: column;
	}

`

export default CommonStyles
