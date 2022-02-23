import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { SidebarStyle } from './style';

interface SidebarProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	collapsed?: boolean;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
	const { children, style, className, theme, collapsed} = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<SidebarStyle ref={ref} style={style} className={className} collapsed={collapsed}>
				{children}
			</SidebarStyle>
		</ThemeProvider>
	);
});

export default Sidebar;
