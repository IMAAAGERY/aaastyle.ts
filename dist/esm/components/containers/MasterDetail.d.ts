import { ComponentPropsWithRef, ReactNode } from 'react';
import { Theme } from '../../common/types';
export type MasterDetailGroup = {
    title: JSX.Element | string;
    collapsedTitle?: JSX.Element | string;
    items?: MasterDetailItem[];
    foldable?: boolean;
};
export type MasterDetailItem = {
    title: JSX.Element | string;
    collapsedTitle?: JSX.Element | string;
    content?: ReactNode;
};
interface MasterDetailProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
    theme?: Theme;
    header?: JSX.Element | string;
    children?: MasterDetailGroup[];
    footer?: JSX.Element | string;
    collapsed?: boolean;
}
declare const MasterDetail: import("react").ForwardRefExoticComponent<Omit<MasterDetailProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default MasterDetail;
