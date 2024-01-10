import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ContainerProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
    vertical?: boolean;
}
declare const Container: import("react").ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Container;
