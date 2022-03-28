import styled from 'styled-components';

export const ListStyle = styled.ul`
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	list-style: none;
	color: ${(props) => props.theme.list.color};
	border-radius: 12px;
	padding: 0;
	margin: 12px;
	width: 100%;
	box-sizing: border-box;
	transition: 0.3s;
`;

export const ListItemStyle = styled.li`
	position: relative;
	border-bottom: 1px solid rgba(144, 144, 144, 0.3);
	cursor: pointer;
	color: ${(props) => props.theme.listItem.color};
	background-color: ${(props) => props.theme.listItem.backgroundColor};
	box-sizing: border-box;
	line-height: 2.5;
	width: 100%;

	&:hover {
		opacity: 0.8;
	}
`;

export const DropdownWrapperStyle = styled.div<{ show?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-color: #ffffff;
	padding: 0;
	border: ${(props) => (props.show ? '1px solid rgba(144, 144, 144, 0.3)' : 'none')};
`;


export const DropdownListStyle = styled.ul<{ show?: boolean }>`
	list-style: none;
	padding: 0;
	margin: 0;
	transition: max-height 0.5s;
	max-height: ${(props) => (props.show ? '500px' : '0')};
	overflow: hidden;
`;

export const DropdownItemStyle = styled.li`
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	padding: 8px 12px;
	margin: 0;
	min-width: 100px;
	min-height: 40px;

	&:hover {
		/* opacity: 0.8; */
		background-color: rgba(144, 144, 144, 0.3);
	}
`;
