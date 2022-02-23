import styled from 'styled-components';

export const ListStyle = styled.ul`
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	list-style: none;
	/* background-color: ${(props) => props.theme.list.backgroundColor}; */
	color: ${(props) => props.theme.list.color};
	/* border-color: ${(props) => props.theme.list.borderColor}; */
	border-radius: 12px;
	padding: 0;
	margin: 12px;
	width: 100%;
	box-sizing: border-box;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
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
