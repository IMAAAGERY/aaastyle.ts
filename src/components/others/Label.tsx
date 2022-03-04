import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { IconProps } from './Icon';
import Spacer from './Spacer';
import { LabelStyle } from './style';

export interface LabelProps extends ComponentPropsWithRef<'div'> {
	children?: IconProps;
	theme?: Theme;
	reversed?: boolean;
	label?: string;
}

const Label = forwardRef<HTMLDivElement, LabelProps>((props, ref) => {
	const { children, theme, className, style, reversed, label } = props;

	return (
		<LabelStyle theme={theme} className={className} style={style} ref={ref}>
			{reversed ? (
				<>
					<span>{label}</span>
					{children && (
						<>
							<Spacer />
							{children}
						</>
					)}
				</>
			) : (
				<>
					{children && (
						<>
							<Spacer />
							{children}
						</>
					)}
					<span>{label}</span>
				</>
			)}
		</LabelStyle>
	);
});

export default Label;
