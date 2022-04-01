import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { SidebarStyle } from './style';

interface SidebarProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	collapsed?: boolean;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
	const { children, style, className, theme, collapsed } = props;

	return (
		<SidebarStyle theme={theme} ref={ref} style={style} className={className} collapsed={collapsed}>
			{children}
		</SidebarStyle>
	);
});

export default Sidebar;
