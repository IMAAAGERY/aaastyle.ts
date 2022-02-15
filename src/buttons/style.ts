import { Size } from './../common/types';
import styled from 'styled-components';

export const ButtonStyle = styled.button<{ width?: number, height?: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${props => props.height || '40px'};
	width: ${props => props.width || '80px'};
	margin: 4px;
	border-radius: 6px;
	background-color: black;
	border: 4px solid red;
	color: white;
`;
