import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { ContainerStyle } from './style';

interface ContainerProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	vertical?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const { children } = props;

	return (
		<ContainerStyle {...props} ref={ref}>
			{children}
		</ContainerStyle>
	);
});

export default Container;
