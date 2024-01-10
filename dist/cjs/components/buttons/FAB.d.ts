import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface FABProps extends ComponentPropsWithRef<'button'> {
    theme?: Theme;
    children?: JSX.Element;
    extended?: boolean;
}
declare const FAB: import("react").ForwardRefExoticComponent<Omit<FABProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default FAB;
