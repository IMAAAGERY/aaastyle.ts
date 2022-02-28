import { ComponentPropsWithRef, forwardRef, useEffect, useState } from 'react';
import { Theme } from '../../common/types';
import { ButtonContentStyle, ButtonRippleStyle, ButtonStyle } from './style';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
	theme?: Theme;
	variant?: ButtonVariant;
	color?: ButtonColor;
	disabled?: boolean;
	shape?: ButtonShape;
}

export type ButtonVariant = 'text' | 'outlined' | 'contained';

export type ButtonShape = 'rounded' | 'sharp' | 'pill';

export type ButtonColor = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';

const Button= forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, className, style, theme, variant, color, shape, disabled, onClick } = props;

	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const node = e.target as HTMLElement;
		const rect = node.getBoundingClientRect();
		setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		onClick && onClick(e);
	};

	return (
		<ButtonStyle ref={ref} disabled={disabled} theme={theme} className={className} style={style} onClick={handleClick} variant={variant || 'contained'} color={color || 'primary'} shape={shape || 'rounded'}>
			<ButtonContentStyle>{children}</ButtonContentStyle>
			{isRippling && <ButtonRippleStyle left={coords.x} top={coords.y} />}
		</ButtonStyle>
	);
});

export default Button;
