import styled from 'styled-components';

export const InputStyle = styled.input`
	border: none;
	border-bottom: 1px solid rgba(144, 144, 144, 0.3);
`;

export const SelectWrapperStyle = styled.div``;

export const SelectStyle = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	border: none;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
	border: 1px solid rgba(144, 144, 144, 0.3);
	border-radius: 4px;
	background-color: #ffffff;
	font-size: 1em;
	padding: 12px 12px 12px 12px;
	cursor: pointer;

	& > span {
		font-weight: 600;
	}
`;

export const OptionsWrapperStyle = styled.div`
	position: absolute;
	border: 1px solid rgba(144, 144, 144, 0.3);
	border-radius: 4px;
	background-color: #ffffff;
	font-size: 1em;
	font-weight: 600;
	margin-top: 8px;
	padding: 0;
`;

export const OptionsListStyle = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const OptionStyle = styled.li`
	cursor: pointer;
	padding: 12px 24px 12px 24px;
	margin: 8px 0px 8px 0px;
	font-weight: 500;

	&:hover {
		/* opacity: 0.8; */
		background-color: rgba(144, 144, 144, 0.3);
	}
`;
