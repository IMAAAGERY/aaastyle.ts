import { ComponentPropsWithRef, forwardRef, useState, useEffect, useRef, cloneElement } from 'react';
import { Theme } from '../../common/types';
import { LabelProps } from '../others/Label';
import { ButtonContentStyle, ButtonRippleStyle, FABStyle } from './style';

interface FABProps extends ComponentPropsWithRef<'button'> {
	theme?: Theme;
	children?: JSX.Element;
	extended?: boolean;
}

const FAB = forwardRef<HTMLButtonElement, FABProps>((props, ref) => {
	const labelRef = useRef();
	const { className, style, onClick, theme, children, extended } = props;

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
		<FABStyle extended={extended || false} ref={ref} className={className} style={style} theme={theme} onClick={handleClick}>
			<ButtonContentStyle>{children}</ButtonContentStyle>
			{isRippling && <ButtonRippleStyle left={coords.x} top={coords.y} />}
		</FABStyle>
	);
});

export default FAB;
