import { ComponentPropsWithRef, forwardRef, ReactNode, useState } from 'react';
import { Theme } from '../../common/types';
import List from '../lists/List';
import ListItem from '../lists/ListItem';
import Container from './Container';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import { MasterDetailGroupTitleStyle, MasterDetailStyle } from './style';

export type MasterDetailGroup = {
	title: JSX.Element | string;
	collapsedTitle?: JSX.Element | string;
	items?: MasterDetailItem[];
	foldable?: boolean;
};
export type MasterDetailItem = {
	title: JSX.Element | string;
	collapsedTitle?: JSX.Element | string;
	content?: ReactNode;
};

interface MasterDetailProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
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
		<MasterDetailStyle ref={ref} style={style} theme={theme} className={className}>
			<Sidebar collapsed={collapsed}>
				{header && <SidebarItem>{header}</SidebarItem>}
				{children?.map((group, index) => (
					<SidebarItem key={index}>
						<MasterDetailGroupTitleStyle>{collapsed ? group.collapsedTitle : group.title}</MasterDetailGroupTitleStyle>
						<List>
							{group.items?.map((item, index) => (
								<ListItem onClick={() => setCurrentContent(item.content)} key={index}>
									{collapsed ? item.collapsedTitle : item.title}
								</ListItem>
							))}
						</List>
					</SidebarItem>
				))}
				{footer && <SidebarItem style={{ justifySelf: 'flex-end' }}>{footer}</SidebarItem>}
			</Sidebar>
			<Container vertical style={{ backgroundColor: '#f2f2f7', borderLeft: '1px solid rgba(144, 144, 144, 0.3)', flexGrow: 1 }}>
				{currentContent}
			</Container>
		</MasterDetailStyle>
	);
});

export default MasterDetail;
