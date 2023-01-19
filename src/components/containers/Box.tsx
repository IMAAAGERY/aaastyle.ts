import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { BoxStyle } from './style';

interface BoxProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	vertical?: boolean;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
	const { children, style, className, theme, vertical } = props;

	return (
		<BoxStyle ref={ref} {...props} vertical={vertical}>
			{children}
		</BoxStyle>
	);
});

export default Box;
