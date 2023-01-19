import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { SidebarItemStyle } from './style';

export interface SidebarItemProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>((props, ref) => {
	const { children } = props;

	return (
		<SidebarItemStyle ref={ref} {...props}>
			{children}
		</SidebarItemStyle>
	);
});

export default SidebarItem;
