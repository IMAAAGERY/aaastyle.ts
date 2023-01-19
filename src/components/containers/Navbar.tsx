import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { NavbarStyle } from './style';

export interface NavbarProps extends ComponentPropsWithRef<'nav'> {
	theme?: Theme;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { children } = props;

	return (
		<NavbarStyle {...props} ref={ref}>
			{children}
		</NavbarStyle>
	);
});

export default Navbar;
