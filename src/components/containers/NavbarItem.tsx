import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { NavbarItemStyle } from './style';

export interface NavbarItemProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<NavbarItemStyle ref={ref} {...props}>
			{children}
		</NavbarItemStyle>
	);
});

export default NavbarItem;
