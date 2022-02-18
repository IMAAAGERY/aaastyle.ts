export type ButtonVariant = 'text' | 'outlined' | 'contained';

export type ButtonShape = 'rounded' | 'sharp' | 'pill';

export type ButtonColor = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';

export type Theme = {
	button: {
		backgroundColor: {
			primary: string;
			secondary: string;
			warning: string;
			danger: string;
			info: string;
			success: string;
			dark: string;
			light: string;
		};
		borderColor: {
			primary: string;
			secondary: string;
			warning: string;
			danger: string;
			info: string;
			success: string;
			dark: string;
			light: string;
		};
		color: {
			primary: string;
			secondary: string;
			warning: string;
			danger: string;
			info: string;
			success: string;
			dark: string;
			light: string;
		};
	};
};
