import { ComponentPropsWithRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Theme } from '../../common/types';
import { ToastStyle } from './style';

export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface ToastProps extends ComponentPropsWithRef<'div'> {
	position?: ToastPosition;
	duration?: number; // in milliseconds
	onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
	closable?: boolean;
	theme?: Theme;
}

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
	const { children, className, style, position, duration, onClose, closable, theme } = props;

	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		if (duration) {
			const timer = setTimeout(() => setShow(false), duration);
			return () => clearTimeout(timer);
		}
		// eslint-disable-next-line
	}, [show]);

	const toast = () => {
        setShow(true);
	};

	useImperativeHandle(ref as any, () => ({
		toast() {
			toast();
		},
	}));

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		closable && setShow(false);
		onClose && onClose(e);
	};

	return (
		<ToastStyle  closable={closable || false} onClick={handleClick} ref={ref} className={className} style={style} theme={theme} position={position || 'top-center'} show={show}>
			{children}
		</ToastStyle>
	);
});

export default Toast;
