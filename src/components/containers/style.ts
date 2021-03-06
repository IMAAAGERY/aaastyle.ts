import styled from 'styled-components';
import { PositionType } from './Dialog';

export const ViewStyle = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	position: fixed;
	z-index: 100;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	flex-direction: row;
	background-color: ${(props) => props.theme.view.backgroundColor};
	flex-wrap: wrap;
	overflow-x: hidden;
	box-sizing: border-box;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ContainerStyle = styled.div<{ vertical?: boolean }>`
	position: relative;
	flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
	display: flex;
	background-color: ${(props) => props.theme.container.backgroundColor};
	padding: 8px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const BoxStyle = styled.div<{ vertical?: boolean }>`
	display: flex;
	flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 12px;
	box-sizing: border-box;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.box.backgroundColor};
	padding: 8px;
	margin: 8px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const MasterDetailStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-grow: 1;

	@media (max-width: 768px) {
		flex-grow: unset;
	}
`;

export const MasterDetailGroupTitleStyle = styled.span`
	display: flex;
	align-self: flex-start;
`;

export const DialogBackgroundStyle = styled.div<{ position?: PositionType }>`
	display: flex;
	justify-content: center;
	align-items: ${(props) => (props.position === 'top' ? 'flex-start' : props.position === 'bottom' ? 'flex-end' : 'center')};
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.dialogBackground.backgroundColor};
	margin: 0;
	padding: 100px 0;
	box-sizing: border-box;
`;

export const DialogStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	min-width: 200px;
	min-height: 200px;
	background-color: ${(props) => props.theme.dialog.backgroundColor};
	box-sizing: border-box;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 12px;
	padding: 8px;
	color: ${(props) => props.theme.dialog.color};
`;

export const SidebarStyle = styled.aside<{ collapsed?: boolean }>`
	position: sticky;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	left: 0;
	top: 0;
	height: 100vh;
	width: ${(props) => (props.collapsed ? '70px' : '250px')};
	overflow-x: hidden;
	transition: 0.5s;
	white-space: nowrap;
	background-color: ${(props) => props.theme.sidebar.backgroundColor};
	color: ${(props) => props.theme.sidebar.color};
	padding: 0;
	box-sizing: border-box;
	@media (max-width: 768px) {
		/* position: absolute; */
		width: ${(props) => (props.collapsed ? '0' : '200px')};
	}
`;

export const SidebarItemStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.sidebarItem.color};
	background-color: ${(props) => props.theme.sidebarItem.backgroundColor};
	border-bottom: 1px solid rgba(144, 144, 144, 0.3);
	width: 100%;
	min-height: 50px;
	padding: 8px;
	box-sizing: border-box;
`;

export const NavbarStyle = styled.div`
	position: sticky;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	left: 0;
	top: 0;
	min-height: 60px;
	width: 100%;
	overflow: hidden;
	transition: 0.5s;
	white-space: nowrap;
	background-color: ${(props) => props.theme.navbar.backgroundColor};
	color: ${(props) => props.theme.navbar.color};
	padding: 0;
	box-sizing: border-box;
`;

export const NavbarItemStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.navbarItem.color};
	background-color: ${(props) => props.theme.navbarItem.backgroundColor};
	border-bottom: 1px solid rgba(144, 144, 144, 0.3);
	width: 100%;
	min-height: 50px;
	padding: 8px;
	box-sizing: border-box;
`;
