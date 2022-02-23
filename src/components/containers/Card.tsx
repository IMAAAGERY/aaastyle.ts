import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../common/types';
import { DEFAULT_THEME } from '../../common/constants';
import { CardStyle } from './style';

interface CardProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<CardStyle ref={ref} style={style} className={className}>
				{children}
			</CardStyle>
		</ThemeProvider>
	);
});

export default Card;
