import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export interface NavbarProps extends ComponentPropsWithRef<'nav'> {
    theme?: Theme;
}
declare const Navbar: import("react").ForwardRefExoticComponent<Omit<NavbarProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Navbar;
