import { ComponentPropsWithRef, ReactNode } from 'react';
import { Orientation } from '../../common/types';
interface ToggleButtonGroupProps extends ComponentPropsWithRef<'div'> {
    children: ReactNode[];
    exclusive?: boolean;
    orientation?: Orientation;
}
declare const ToggleButtonGroup: import("react").ForwardRefExoticComponent<Omit<ToggleButtonGroupProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default ToggleButtonGroup;
