import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
interface ToastProps extends ComponentPropsWithRef<'div'> {
    position?: ToastPosition;
    duration?: number;
    onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
    closable?: boolean;
    theme?: Theme;
}
declare const Toast: import("react").ForwardRefExoticComponent<Omit<ToastProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Toast;
