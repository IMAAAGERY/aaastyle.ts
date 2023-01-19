import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { IconStyle } from './style';

export type IconShape = 'circle' | 'square';

export type IconSize = 'small' | 'medium' | 'large';

export interface IconProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	shape?: IconShape;
	size?: IconSize;
}

const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
	const { children, shape, size } = props;

	return (
		<IconStyle ref={ref} {...props} shape={shape || 'circle'} size={size || 'medium'}>
			{children}
		</IconStyle>
	);
});

export default Icon;
