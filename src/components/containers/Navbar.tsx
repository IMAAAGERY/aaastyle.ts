import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { NavbarStyle } from './style';

export interface NavbarProps extends ComponentPropsWithRef<'nav'> {
	theme?: Theme;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<NavbarStyle theme={theme} ref={ref} style={style} className={className}>
			{children}
		</NavbarStyle>
	);
});

export default Navbar;
