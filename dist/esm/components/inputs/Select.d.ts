import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export type OptionProps = {
    value: string | number;
    label: string;
    disabled?: boolean;
};
interface SelectProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    placeholder?: string;
    defaultValue?: string | number;
    options: OptionProps[];
    onChange?: (value: any) => void;
}
declare const Select: import("react").ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Select;
