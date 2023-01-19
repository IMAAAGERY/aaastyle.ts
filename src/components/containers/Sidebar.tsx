import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { SidebarStyle } from './style';

interface SidebarProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	collapsed?: boolean;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
	const { children, collapsed } = props;

	return (
		<SidebarStyle {...props} ref={ref} collapsed={collapsed}>
			{children}
		</SidebarStyle>
	);
});

export default Sidebar;
