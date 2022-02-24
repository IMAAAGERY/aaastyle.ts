import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { IconProps } from './Icon';
import { LabelStyle } from './style';

type Children = [IconProps, string] | IconProps | string;

export interface LabelProps extends ComponentPropsWithRef<'div'> {
	children?: Children;
	theme?: Theme;
}

const Label = forwardRef<HTMLDivElement, LabelProps>((props, ref) => {

	const { children, theme, className, style } = props;

	const childrenDestructuring = () => {
		if (children) {
			if (Array.isArray(children)) {
				return children.map((component, index) => <>{component}</>);
			}
			return children;
		}
	};

	return (
		<LabelStyle theme={theme} className={className} style={style} ref={ref}>
			{childrenDestructuring()}
		</LabelStyle>
	);
});

export default Label;
