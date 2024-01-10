import { ComponentPropsWithRef } from 'react';
interface ToggleSwitchProps extends ComponentPropsWithRef<'input'> {
    children?: null;
}
declare const ToggleSwitch: import("react").ForwardRefExoticComponent<Omit<ToggleSwitchProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ToggleSwitch;
