import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ViewProps extends ComponentPropsWithRef<'div'> {
    theme?: Theme;
}
declare const View: import("react").ForwardRefExoticComponent<Omit<ViewProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default View;
