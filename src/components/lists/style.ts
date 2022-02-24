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

	&:hover{
		opacity: 0.8;
	}
`;


export const DropdownStyle = styled.div`

`;

export const DropdownItem = styled.div``;