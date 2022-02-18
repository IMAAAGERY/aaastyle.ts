import { MouseEventHandler, ReactNode } from 'react';
import { ButtonStyle } from './style';
import { ButtonColor, ButtonShape, ButtonVariant, Theme } from '../common/types';
import {ThemeProvider} from 'styled-components';
import { DEFAULT_THEME } from '../common/constants';

interface BaseButtonProps {
	children?: ReactNode;
	className?: string;
	theme?: Theme;
	variant?: ButtonVariant;
	color?: ButtonColor;
	disabled?: boolean;
	shape?: ButtonShape;
}

type HTMLButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;


export type ButtonProps = HTMLButtonProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const { children, className, theme, variant, color, shape } = props;

	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<ButtonStyle ref={ref as React.MutableRefObject<HTMLButtonElement>} className={className} variant={variant || 'contained'} color={color || 'primary'} shape={shape || 'rounded'}>
				{children}
			</ButtonStyle>
		</ThemeProvider>
	);
};

export default Button;
