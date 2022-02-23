import styled, { css } from 'styled-components';
import { Orientation } from '../../common/types';
import { ButtonColor, ButtonShape, ButtonVariant } from './Button';

export const ButtonStyle = styled.button<{ color: ButtonColor; variant: ButtonVariant; shape: ButtonShape }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 120px;
	margin: 4px;
	border-radius: 6px;
	color: ${(props) => `${props.theme.button.color[props.color]}`};
	cursor: pointer;
	overflow: hidden;

	&:hover {
		opacity: 0.8;
	}

	${(props) =>
		(props.variant === 'outlined' &&
			css`
				color: #000000;
				border: 3px solid ${props.theme.button.borderColor[props.color]};
				background: none;
			`) ||
		(props.variant === 'contained' &&
			css`
				border: none;
				background: ${props.theme.button.backgroundColor[props.color]};
			`) ||
		(props.variant === 'text' &&
			css`
				color: #000000;
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
		(props.shape === 'sharp' &&
			css`
				border-radius: 0;
			`)}
`;

export const ButtonContentStyle = styled.span`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

export const ButtonRippleStyle = styled.span<{ left: number; top: number }>`
	width: 25px;
	height: 25px;
	position: absolute;
	display: block;
	content: '';
	border-radius: 200px;
	animation: 0.9s ease 1 forwards ripple-effect;
	left: ${(props) => props.left}px;
	top: ${(props) => props.top}px;
	background-color: #e6e6e6;
`;

export const ToggleSwitchWrapperStyle = styled.div`
	position: relative;
	margin: 4px;
`;

export const ToggleSwitchLabelStyle = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const ToggleSwitchStyle = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	margin: 0;
	&:checked + ${ToggleSwitchLabelStyle} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}

	&:disabled + ${ToggleSwitchLabelStyle} {
		background: #cccccc;
		cursor: default;
	}
`;

export const ToggleButtonStyle = styled.button<{ selected: boolean }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	margin: 4px;
	border-radius: 6px;
	overflow: hidden;
	border: none;
	background-color: ${(props) => (props.selected ? '#cccccc' : '#ffffff')};
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.selected ? '#cccccc' : '#f2f2f7')};
	}
`;

export const ToggleButtonGroupStyle = styled.div<{ orientation: Orientation }>`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.orientation === 'horizontal' ? 'row' : 'column')};
	justify-content: center;
	align-items: center;
	border: 1px solid #909090;
	border-radius: 6px;
	box-sizing: border-box;
	width: fit-content;
	padding: 0;

	& > ${ToggleButtonStyle} {
		margin: 0;
	}
`;
