import { ComponentPropsWithRef } from 'react';
interface ViewProps extends ComponentPropsWithRef<'div'> {
}
declare const View: import("react").ForwardRefExoticComponent<Omit<ViewProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default View;
