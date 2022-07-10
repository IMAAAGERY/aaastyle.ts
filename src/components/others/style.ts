import { IconShape, IconSize } from './Icon';
import styled, { css } from 'styled-components';
import { ToastPosition } from './Toast';

export const SpacerStyle = styled.div`
	height: 8px;
	min-width: 8px;
`;

export const ToastStyle = styled.div<{ position: ToastPosition; show: boolean; closable: boolean }>`
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	width: 120px;
	height: 40px;
	border-radius: 200px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.toast.backgroundColor};
	cursor: ${(props) => (props.closable ? 'pointer' : 'default')};
	transition: 0.5s;

	${(props) =>
		(props.position === 'top-left' &&
			css`
				top: 8px;
				left: ${props.show ? '8px' : '-120px'};
			`) ||
		(props.position === 'top-center' &&
			css`
				top: ${props.show ? '8px' : '-120px'};
				left: 50%;
				transform: translateX(-50%);
			`) ||
		(props.position === 'top-right' &&
			css`
				top: 8px;
				right: ${props.show ? '8px' : '-120px'};
			`) ||
		(props.position === 'bottom-left' &&
			css`
				bottom: 8px;
				left: ${props.show ? '8px' : '-120px'};
			`) ||
		(props.position === 'bottom-center' &&
			css`
				bottom: ${props.show ? '8px' : '-120px'};
				left: 50%;
				transform: translateX(-50%);
			`) ||
		(props.position === 'bottom-right' &&
			css`
				bottom: 8px;
				right: ${props.show ? '8px' : '-120px'};
			`)}
`;

const handleIconSize = (size: IconSize) => {
	switch (size) {
		case 'small':
			return css`
				width: 32px;
				height: 32px;
			`;
		case 'medium':
			return css`
				width: 64px;
				height: 64px;
			`;
		case 'large':
			return css`
				width: 128px;
				height: 128px;
			`;
	}
};

const handleIconShape = (shape: IconShape) => {
	switch (shape) {
		case 'circle':
			return '100%';
		case 'square':
			return '0';
	}
};

export const IconStyle = styled.div<{ shape: IconShape; size: IconSize }>`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) => handleIconSize(props.size)};
	color: ${(props) => props.theme.icon.color};
	background-color: ${(props) => props.theme.icon.backgroundColor};

	& * {
		width: fit-content;
		height: 100%;
	}
`;

export const LabelStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: fit-content;
	padding: 12px;
`;