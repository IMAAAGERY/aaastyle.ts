import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { IconProps } from './Icon';
import Spacer from './Spacer';
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
				return children.map((component, index) => {
					if (index !== children.length - 1) {
						return (
							<>
								{typeof component === 'string' ? <span>{component}</span> : component}
								<Spacer />
							</>
						);
					}
					return typeof component === 'string' ? <span>{component}</span> : component;
				});
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
