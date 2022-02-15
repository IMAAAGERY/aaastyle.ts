import { ReactNode } from 'react';
import { ButtonStyle } from './style';
import { ButtonColor, ButtonShape, ButtonVariant, Size } from '../common/types';

interface ButtonProps {
	children?: ReactNode;
	onClick: () => void;
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: Size;
	disabled?: boolean;
	shape?: ButtonShape;
}



const Button = (props: ButtonProps) => {
	const { children, onClick } = props;
	return <ButtonStyle onClick={() => onClick()}>{children}</ButtonStyle>;
};

export default Button;
