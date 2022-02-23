import { ComponentPropsWithRef, forwardRef, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import List from '../lists/List';
import ListItem from '../lists/ListItem';
import Container from './Container';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import { MasterDetailGroupTitleStyle, MasterDetailStyle } from './style';

export type MasterDetailGroup = {
	title: JSX.Element | string;
	items?: MasterDetailItem[];
	foldable?: boolean;
};
export type MasterDetailItem = {
	title: JSX.Element | string;
	content: ReactNode;
};

interface MasterDetailProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	header?: JSX.Element | string;
	children?: MasterDetailGroup[];
	footer?: JSX.Element | string;
	collapsed?: boolean;
}

const MasterDetail = forwardRef<HTMLDivElement, MasterDetailProps>((props, ref) => {
	const { children, style, className, theme, header, footer, collapsed } = props;
	const [currentContent, setCurrentContent] = useState<ReactNode>();

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<MasterDetailStyle ref={ref} style={style} className={className}>
				<Sidebar collapsed={collapsed}>
					{header && <SidebarItem>{header}</SidebarItem>}
					{children?.map((group, index) => (
						<SidebarItem key={index}>
							<MasterDetailGroupTitleStyle>{group.title}</MasterDetailGroupTitleStyle>
							<List>
								{group.items?.map((item, index) => (
									<ListItem onClick={() => setCurrentContent(item.content)} key={index}>
										{item.title}
									</ListItem>
								))}
							</List>
						</SidebarItem>
					))}
					{footer && <SidebarItem style={{justifySelf: 'flex-end'}}>{footer}</SidebarItem>}
				</Sidebar>
				<Container vertical style={{ backgroundColor: '#f2f2f7', borderLeft: '1px solid rgba(144, 144, 144, 0.3)', flexGrow: 1 }}>
					{currentContent}
				</Container>
			</MasterDetailStyle>
		</ThemeProvider>
	);
});

export default MasterDetail;
