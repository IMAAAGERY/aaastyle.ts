import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export interface DropdownItemProps extends ComponentPropsWithRef<'li'> {
    theme?: Theme;
}
declare const DropdownItem: import("react").ForwardRefExoticComponent<Omit<DropdownItemProps, "ref"> & import("react").RefAttributes<HTMLLIElement>>;
export default DropdownItem;
