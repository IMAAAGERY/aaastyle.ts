import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { ContainerStyle } from './style';

interface ContainerProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	vertical?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const { children, style, className, theme, vertical } = props;

	return (
		<ThemeProvider theme={ theme || DEFAULT_THEME}>
			<ContainerStyle ref={ref} style={style} className={className} vertical={vertical}>
				{children}
			</ContainerStyle>
		</ThemeProvider>
	);
});

export default Container;
