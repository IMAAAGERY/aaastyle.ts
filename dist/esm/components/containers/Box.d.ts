import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface BoxProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    vertical?: boolean;
}
declare const Box: import("react").ForwardRefExoticComponent<Omit<BoxProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Box;
