import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { NavbarItemStyle } from './style';

export interface NavbarItemProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<NavbarItemStyle ref={ref} style={style} className={className}>
				{children}
			</NavbarItemStyle>
		</ThemeProvider>
	);
});

export default NavbarItem;
