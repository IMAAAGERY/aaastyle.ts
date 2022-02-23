import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../common/types';
import { BoxStyle } from './style';
import { DEFAULT_THEME } from '../../common/constants';

interface BoxProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	vertical?: boolean;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
	const { children, style, className, theme, vertical } = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<BoxStyle ref={ref} style={style} className={className} vertical={vertical}>
				{children}
			</BoxStyle>
		</ThemeProvider>
	);
});

export default Box;
