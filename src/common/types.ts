export interface BaseComponentProps {
	theme?: Theme;
}

export type Orientation = 'horizontal' | 'vertical';

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
	sidebar: {
		backgroundColor: string;
		color: string;
	};
	sidebarItem: {
		backgroundColor: string;
		color: string;
	};
	navbar: {
		backgroundColor: string;
		color: string;
	};
	navbarItem: {
		backgroundColor: string;
		color: string;
	};
	container: {
		backgroundColor: string;
	};
	view: {
		backgroundColor: string;
	};
	list: {
		backgroundColor: string;
		borderColor: string;
		color: string;
	};
	listItem: {
		backgroundColor: string;
		color: string;
	};
	dialog: {
		backgroundColor: string;
		color: string;
	};
	dialogBackground: {
		backgroundColor: string;
	};
	card: {
		backgroundColor: string;
	};
	toast: {
		backgroundColor: string;
	};
	box: {
		backgroundColor: string;
	};
	input: {
		backgroundColor: string;
		color: string;
	};
	icon: {
		backgroundColor: string;
		color: string;
	};
	label: {
		backgroundColor: string;
		color: string;
	};
	fab: {
		backgroundColor: string;
		borderColor: string;
		color: string;
	};
	select: {
		backgroundColor: string;
		color: string;
	};
	option: {
		backgroundColor: string;
		selectedBackgroundColor: string;
		hoverBackgroundColor: string;
		color: string;
		selectedColor: string;
		hoverColor: string;
	};
};
