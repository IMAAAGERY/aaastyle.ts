import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ListProps extends ComponentPropsWithRef<'ul'> {
    theme?: Theme;
}
declare const List: import("react").ForwardRefExoticComponent<Omit<ListProps, "ref"> & import("react").RefAttributes<HTMLUListElement>>;
export default List;
