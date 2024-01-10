import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ButtonProps extends ComponentPropsWithRef<'button'> {
    theme?: Theme;
    variant?: ButtonVariant;
    color?: ButtonColor;
    disabled?: boolean;
    shape?: ButtonShape;
}
export type ButtonVariant = 'text' | 'outlined' | 'contained';
export type ButtonShape = 'rounded' | 'sharp' | 'pill';
export type ButtonColor = 'primary' | 'secondary' | 'info' | 'warning' | 'danger' | 'success';
declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
