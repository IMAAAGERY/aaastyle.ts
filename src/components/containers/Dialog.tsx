import { ComponentPropsWithRef, forwardRef, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { useClickOutside } from '../../utils';
import { DialogBackgroundStyle, DialogStyle } from './style';

export type PositionType = 'top' | 'center' | 'bottom';
export interface DialogProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	closeOnClickOutside?: boolean;
	onClose?: () => void;
	position?: PositionType;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
	const { children, style, theme, className, closeOnClickOutside, position, onClose } = props;
	const dialogRef = useRef<HTMLDivElement>(null);

	useClickOutside(dialogRef, onClose);

	return (
		<DialogBackgroundStyle position={position} ref={ref}>
			<DialogStyle ref={closeOnClickOutside ? dialogRef : undefined} style={style} className={className}>
				{children}
			</DialogStyle>
		</DialogBackgroundStyle>
	);
});

export default Dialog;
