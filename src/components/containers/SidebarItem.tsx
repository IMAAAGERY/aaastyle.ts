import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { SidebarItemStyle } from './style';

export interface SidebarItemProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<SidebarItemStyle ref={ref} theme={theme} style={style} className={className}>
			{children}
		</SidebarItemStyle>
	);
});

export default SidebarItem;
