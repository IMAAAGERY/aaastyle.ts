import { ComponentPropsWithRef, forwardRef } from "react";
import { DropdownItemStyle } from './style';

interface DropdownItemProps extends ComponentPropsWithRef<'div'>{}

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>((props,ref) => {
	return <DropdownItemStyle></DropdownItemStyle>
});

export default DropdownItem;