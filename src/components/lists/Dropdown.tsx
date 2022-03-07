import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { DropdownWrapperStyle, DropdownListStyle } from './style';

export interface DropdownProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	const { theme, className, style, children } = props;
	return (
		<DropdownWrapperStyle ref={ref} theme={theme} className={className} style={style}>
			<DropdownListStyle>{children}</DropdownListStyle>
		</DropdownWrapperStyle>
	);
});

export default Dropdown;
