import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface SidebarProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    collapsed?: boolean;
}
declare const Sidebar: import("react").ForwardRefExoticComponent<Omit<SidebarProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Sidebar;
