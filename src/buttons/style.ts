import { ButtonColor, ButtonShape, ButtonVariant } from './../common/types';
import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button<{ color: ButtonColor; variant: ButtonVariant; shape: ButtonShape }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 120px;
	margin: 4px;
	border-radius: 6px;
	color: ${(props) => `${props.theme.button.color[props.color]}`};
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.98);
	}

	${(props) =>
		(props.variant === 'outlined' &&
			css`
				border: 3px solid ${props.theme.button.borderColor[props.color]};
				color: black;
				background: none;
			`) ||
		(props.variant === 'contained' &&
			css`
				border: 3px solid ${props.theme.button.borderColor[props.color]};
				background: ${props.theme.button.backgroundColor[props.color]};
			`) ||
		(props.variant === 'text' &&
			css`
				color: black;
				border: none;
				background: none;
			`)}

	${(props) =>
		(props.shape === 'rounded' &&
			css`
				border-radius: 12px;
			`) ||
		(props.shape === 'pill' &&
			css`
				border-radius: 200px;
			`) ||
		(props.shape === 'sharp' && css`
			border-radius: 0;
		`)}
`;
