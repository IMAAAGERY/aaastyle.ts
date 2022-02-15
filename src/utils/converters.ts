import { ButtonVariant, ButtonColor } from './../common/types';
import { Size } from '../common/types';

export const handleSize = (size: Size) => {
	const handleSize = (size: Size) => {
		switch (size) {
			case Size.XS:
				return {
					width: '',
					height: '',
				};
		}
	};
};

export const handleButtonVariant = (variant: ButtonVariant) => {
	switch (variant) {
		case ButtonVariant.Text:
			return {
				border: 'none',
				'background-color': 'transparent',
			};

		case ButtonVariant.Outlined:
			return {
				border: '3px solid',
				'background-color': 'transparent',
			};

		case ButtonVariant.Contained:
			return {
				border: '3px solid',
			};

		default:
			return {
				border: '3px solid',
			};
	}
};

export const handleButtonColor = (color: ButtonColor, theme) => {
	switch (color) {
		case ButtonColor.Primary:
			return {
				color: theme.button.color || 'blue'
			}
		
		case ButtonColor.Secondary:
			return {
				color: ''
			}
	}
};
