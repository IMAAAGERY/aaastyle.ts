import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
export type IconShape = 'circle' | 'square';
export type IconSize = 'small' | 'medium' | 'large';
export interface IconProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    shape?: IconShape;
    size?: IconSize;
}
declare const Icon: import("react").ForwardRefExoticComponent<Omit<IconProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Icon;
