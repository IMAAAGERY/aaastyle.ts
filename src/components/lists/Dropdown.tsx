import { ComponentPropsWithRef, forwardRef, useEffect, useState } from 'react';
import { Theme } from '../../common/types';
import { DropdownListStyle, DropdownWrapperStyle } from './style';

export interface DropdownProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	// position?: 'top' | 'right' | 'bottom' | 'left';
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	const { theme, className, style, children } = props;
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<DropdownWrapperStyle ref={ref} theme={theme} className={className} style={style} show={show}>
			<DropdownListStyle show={show}>{children}</DropdownListStyle>
		</DropdownWrapperStyle>
	);
});

export default Dropdown;
