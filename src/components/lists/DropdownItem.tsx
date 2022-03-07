import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { DropdownItemStyle } from './style';

export interface DropdownItemProps extends ComponentPropsWithRef<'li'> {
	theme?: Theme;
}

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>((props, ref) => {
	const { theme, className, style, children, onClick } = props;
	return (
		<DropdownItemStyle onClick={onClick} ref={ref} theme={theme} className={className} style={style}>
			{children}
		</DropdownItemStyle>
	);
});

export default DropdownItem;
