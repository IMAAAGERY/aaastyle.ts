import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export interface DropdownProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
}
declare const Dropdown: import("react").ForwardRefExoticComponent<Omit<DropdownProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Dropdown;
