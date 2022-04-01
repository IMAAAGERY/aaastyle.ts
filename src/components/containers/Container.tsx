import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { ContainerStyle } from './style';

interface ContainerProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	vertical?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const { children, style, className, theme, vertical } = props;

	return (
		<ContainerStyle theme={theme} ref={ref} style={style} className={className} vertical={vertical}>
			{children}
		</ContainerStyle>
	);
});

export default Container;
