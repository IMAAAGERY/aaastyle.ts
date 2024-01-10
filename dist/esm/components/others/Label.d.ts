import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
import { IconProps } from './Icon';
export interface LabelProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    children?: IconProps;
    theme?: Theme;
    reversed?: boolean;
    label?: string;
}
declare const Label: import("react").ForwardRefExoticComponent<Omit<LabelProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Label;
