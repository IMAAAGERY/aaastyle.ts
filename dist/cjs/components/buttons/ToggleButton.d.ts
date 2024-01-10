import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ToggleButtonProps extends ComponentPropsWithRef<'button'> {
    theme?: Theme;
    selected?: boolean;
    positionInGroup?: 'first' | 'last';
}
declare const ToggleButton: import("react").ForwardRefExoticComponent<Omit<ToggleButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default ToggleButton;
