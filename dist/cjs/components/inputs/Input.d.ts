import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface InputProps extends ComponentPropsWithRef<'input'> {
    theme?: Theme;
}
declare const Input: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
