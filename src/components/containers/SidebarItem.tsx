import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { SidebarItemStyle } from './style';

export interface SidebarItemProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<SidebarItemStyle ref={ref} style={style} className={className}>
				{children}
			</SidebarItemStyle>
		</ThemeProvider>
	);
});

export default SidebarItem;
