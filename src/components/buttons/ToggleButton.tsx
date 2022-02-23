import { ComponentPropsWithRef, forwardRef, MouseEvent, useEffect, useState } from 'react';
import { Theme } from '../../common/types';
import { DEFAULT_THEME } from '../../common/constants';
import { ButtonContentStyle, ButtonRippleStyle, ToggleButtonStyle } from './style';

interface ToggleButtonProps extends ComponentPropsWithRef<'button'> {
	theme?: Theme;
	selected?: boolean;
}

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
	const { theme, children, style, className, onClick, selected } = props;

	const [clicked, setClicked] = useState<boolean>(selected || false);
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

	useEffect(() => {
		if (typeof selected !== 'undefined') setClicked(selected);
	}, [selected]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const node = e.target as HTMLElement;
		const rect = node.getBoundingClientRect();
		setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		if (typeof selected === 'undefined') {
			setClicked(!clicked);
		}
		onClick && onClick(e);
	};

	return (
		<ToggleButtonStyle selected={clicked} theme={theme || DEFAULT_THEME} ref={ref} onClick={(e) => handleClick(e)} style={style} className={className}>
			<ButtonContentStyle>{children}</ButtonContentStyle>
			{isRippling && <ButtonRippleStyle left={coords.x} top={coords.y} />}
		</ToggleButtonStyle>
	);
});

export default ToggleButton;
