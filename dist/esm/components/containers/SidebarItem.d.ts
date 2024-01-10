import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export interface SidebarItemProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
}
declare const SidebarItem: import("react").ForwardRefExoticComponent<Omit<SidebarItemProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default SidebarItem;
