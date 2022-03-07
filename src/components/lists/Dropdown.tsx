import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { DropdownWrapperStyle, DropdownListStyle } from './style';

export interface DropdownProps extends ComponentPropsWithRef<'ul'> {
	theme?: Theme;
}

const Dropdown = forwardRef<HTMLUListElement, DropdownProps>((props, ref) => {
	const { theme, className, style, children } = props;
	return (
		<DropdownWrapperStyle>
			<DropdownListStyle ref={ref} theme={theme} className={className} style={style}>
				{children}
			</DropdownListStyle>
		</DropdownWrapperStyle>
	);
});

export default Dropdown;
