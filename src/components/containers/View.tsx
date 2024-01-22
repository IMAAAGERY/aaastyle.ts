import { ComponentPropsWithRef, forwardRef } from 'react';
import { ViewStyle } from './style';

interface ViewProps extends ComponentPropsWithRef<'div'> {}

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
	const { children, style, className } = props;

	return (
			<ViewStyle style={style} className={className} ref={ref}>
				{children}
			</ViewStyle>
	);
});

export default View;
