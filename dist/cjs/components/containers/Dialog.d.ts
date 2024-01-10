import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export type PositionType = 'top' | 'center' | 'bottom';
export interface DialogProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    closeOnClickOutside?: boolean;
    onClose?: () => void;
    position?: PositionType;
}
declare const Dialog: import("react").ForwardRefExoticComponent<Omit<DialogProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Dialog;
