import { ComponentPropsWithRef, forwardRef } from 'react';
import { DropdownStyle } from './style';

interface DropdownProps extends ComponentPropsWithRef<'div'> {}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	return <DropdownStyle></DropdownStyle>;
});

export default Dropdown;
