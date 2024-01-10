import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export interface NavbarItemProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
}
declare const NavbarItem: import("react").ForwardRefExoticComponent<Omit<NavbarItemProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default NavbarItem;
